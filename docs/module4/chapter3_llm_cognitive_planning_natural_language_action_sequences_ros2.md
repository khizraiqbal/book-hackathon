---
title: Chapter 3 - LLM Cognitive Planning – Natural Language → Action Sequences in ROS 2
sidebar_position: 3
---

# Chapter 3: LLM Cognitive Planning – Natural Language → Action Sequences in ROS 2

## Introduction

Large Language Model (LLM) cognitive planning represents a paradigm shift in robotics, enabling natural language instructions to be transformed into executable action sequences within ROS 2 environments. This chapter explores how modern LLMs can serve as cognitive engines that interpret high-level goals and decompose them into specific, executable robotic tasks.

The integration of LLMs with robotic systems creates intelligent agents capable of understanding context, reasoning about spatial relationships, and planning complex multi-step operations. This cognitive layer bridges the gap between human intention and robotic execution, enabling more intuitive and flexible human-robot interaction.

## LLM Integration Architecture

### Cognitive Planning Pipeline

The LLM cognitive planning system operates as a middleware layer between high-level commands and low-level ROS 2 actions:

1. **Input Processing**: Natural language commands are received and pre-processed
2. **Context Understanding**: LLM analyzes the command within environmental and task context
3. **Action Decomposition**: High-level goals are broken into executable steps
4. **ROS 2 Mapping**: Actions are mapped to specific ROS 2 services, topics, or action servers
5. **Execution Planning**: Sequences are validated and optimized for execution
6. **Monitoring**: Execution progress is tracked and reported back to the cognitive system

### Environmental Context Integration

LLM-based planning systems must maintain awareness of the current state of the environment, including:

- Object positions and states
- Robot capabilities and current status
- Navigation maps and obstacle information
- Task history and progress
- Safety constraints and operational limits

This context is typically provided through ROS 2 topics, services, and parameter servers, allowing the LLM to make informed decisions based on real-time environmental data.

```python
import openai
import json
from typing import List, Dict, Any
from rclpy.node import Node
from std_msgs.msg import String
from geometry_msgs.msg import Pose
from sensor_msgs.msg import JointState

class LLMPolicyPlanner(Node):
    def __init__(self):
        super().__init__('llm_policy_planner')

        # Publishers for different action types
        self.navigation_pub = self.create_publisher(Pose, 'navigation_goals', 10)
        self.manipulation_pub = self.create_publisher(String, 'manipulation_commands', 10)

        # Subscription to voice commands
        self.command_sub = self.create_subscription(
            String, 'voice_commands', self.command_callback, 10
        )

        # Initialize OpenAI client
        self.openai_client = openai.OpenAI()

    def get_environment_context(self) -> Dict[str, Any]:
        """Retrieve current environmental context from ROS 2"""
        context = {
            'robot_position': self.get_robot_position(),
            'available_objects': self.get_object_list(),
            'navigation_map': self.get_navigation_map(),
            'robot_capabilities': self.get_robot_capabilities(),
            'current_task_state': self.get_current_task_state()
        }
        return context

    def command_callback(self, msg):
        """Process incoming voice command through LLM planning"""
        try:
            # Get current environmental context
            env_context = self.get_environment_context()

            # Plan action sequence using LLM
            action_sequence = self.plan_with_llm(msg.data, env_context)

            # Execute the planned sequence
            self.execute_action_sequence(action_sequence)

        except Exception as e:
            self.get_logger().error(f'Error in LLM planning: {e}')

    def plan_with_llm(self, command: str, context: Dict[str, Any]) -> List[Dict]:
        """Use LLM to generate action sequence from natural language command"""

        prompt = f"""
        You are a cognitive planning system for a robot. Given the following command and environmental context,
        generate a sequence of actions to accomplish the task.

        Command: {command}

        Environmental Context:
        {json.dumps(context, indent=2)}

        Respond with a JSON array of actions, where each action has:
        - type: 'navigation', 'manipulation', 'perception', or 'wait'
        - target: specific target for the action
        - parameters: additional parameters for the action

        Example response format:
        [
            {{
                "type": "perception",
                "target": "find_object",
                "parameters": {{"object_type": "red_block"}}
            }},
            {{
                "type": "navigation",
                "target": "move_to_location",
                "parameters": {{"x": 1.0, "y": 2.0, "theta": 0.0}}
            }},
            {{
                "type": "manipulation",
                "target": "pick_object",
                "parameters": {{"object_id": "red_block_1"}}
            }}
        ]
        """

        response = self.openai_client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1
        )

        # Parse the LLM response
        response_text = response.choices[0].message.content
        response_text = response_text.strip()

        # Extract JSON from response (handle potential markdown formatting)
        if response_text.startswith('```json'):
            response_text = response_text[7:]  # Remove ```json
            response_text = response_text.rstrip('`')

        try:
            action_sequence = json.loads(response_text)
            return action_sequence
        except json.JSONDecodeError:
            self.get_logger().error(f'Failed to parse LLM response as JSON: {response_text}')
            return []
```

## Action Mapping and Execution

### ROS 2 Action Mapping

The cognitive planning system must map high-level LLM-generated actions to specific ROS 2 interfaces:

```python
class ActionExecutor:
    def __init__(self, node: LLMPolicyPlanner):
        self.node = node
        self.action_mapping = {
            'navigation': self.execute_navigation,
            'manipulation': self.execute_manipulation,
            'perception': self.execute_perception,
            'wait': self.execute_wait
        }

    def execute_action_sequence(self, action_sequence: List[Dict]):
        """Execute the planned sequence of actions"""
        for i, action in enumerate(action_sequence):
            self.node.get_logger().info(f'Executing action {i+1}/{len(action_sequence)}: {action["type"]}')

            action_type = action['type']
            if action_type in self.action_mapping:
                success = self.action_mapping[action_type](action)
                if not success:
                    self.node.get_logger().error(f'Action failed: {action}')
                    break
            else:
                self.node.get_logger().error(f'Unknown action type: {action_type}')
                break

    def execute_navigation(self, action: Dict) -> bool:
        """Execute navigation action"""
        target_pose = Pose()
        target_pose.position.x = action['parameters']['x']
        target_pose.position.y = action['parameters']['y']
        target_pose.orientation.z = action['parameters']['theta']

        self.node.navigation_pub.publish(target_pose)

        # Wait for navigation to complete (simplified)
        return True

    def execute_manipulation(self, action: Dict) -> bool:
        """Execute manipulation action"""
        command_msg = String()
        command_msg.data = json.dumps(action)
        self.node.manipulation_pub.publish(command_msg)

        return True

    def execute_perception(self, action: Dict) -> bool:
        """Execute perception action"""
        # Trigger perception system based on action parameters
        # This might involve calling object detection services
        return True

    def execute_wait(self, action: Dict) -> bool:
        """Execute wait action"""
        duration = action['parameters'].get('duration', 1.0)
        # In ROS 2, we'd use a timer or similar mechanism
        return True
```

## Context-Aware Planning

### State Management

LLM-based planning systems must maintain awareness of the evolving state of the world and the robot. This includes:

- **Belief State**: What the system believes about the world
- **Plan State**: Current position within the execution sequence
- **Failure State**: How to handle and recover from failures
- **Learning State**: How to improve future planning based on execution outcomes

### Multi-Modal Context Integration

Effective cognitive planning requires integration of multiple sensory modalities:

- Visual perception data
- Tactile feedback
- Auditory information
- Navigation maps and spatial relationships
- Robot kinematics and dynamics

## Safety and Validation

### Plan Validation

Before executing LLM-generated plans, validation mechanisms ensure:

- Safety constraints are respected
- Physical feasibility of actions
- Consistency with environmental constraints
- Robustness to uncertainty and partial observability

### Human-in-the-Loop Verification

For critical operations, the system should provide:

- Plan visualization and explanation
- Human approval mechanisms
- Override capabilities
- Safety monitoring and intervention

## Implementation Challenges

### Latency Considerations

LLM-based planning introduces computational overhead that must be managed:

- Caching of common planning patterns
- Pre-computed action libraries for frequent operations
- Asynchronous planning for complex tasks
- Fallback mechanisms for low-latency requirements

### Reliability and Fallback

LLM responses may not always be reliable, requiring:

- Plan validation and verification
- Fallback to deterministic planners
- Error recovery strategies
- Graceful degradation when LLM fails

## Conclusion

LLM cognitive planning enables robots to understand and execute complex, natural language instructions by transforming high-level goals into executable action sequences. This cognitive layer represents a crucial component of the Vision-Language-Action paradigm, providing the reasoning and planning capabilities necessary for autonomous humanoid behavior.

The next chapter will demonstrate how these components integrate in a capstone project featuring autonomous humanoid navigation, vision, and manipulation based on voice commands.