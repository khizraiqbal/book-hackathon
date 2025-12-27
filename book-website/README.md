# Humanoid Robotics Book - Complete Course

This comprehensive course covers humanoid robotics from fundamentals to advanced simulation techniques. The content is designed for students and developers in Physical AI & Humanoid Robotics.

## Table of Contents

### Module 1: Introduction to Humanoid Robotics
1. [Fundamentals of Humanoid Robots](./module1/fundamentals_humanoid_robots.md) - History, components, and applications
2. [Kinematics and Mathematical Foundations](./module1/kinematics_mathematical_foundations.md) - Forward/inverse kinematics, transformations, and motion planning
3. [Control Systems and Basic Locomotion](./module1/control_systems_locomotion.md) - Balance, stability, and gait generation

### Module 2: The Digital Twin (Gazebo & Unity)
1. [Gazebo Fundamentals](./module2/gazebo_fundamentals.md) - Digital twins, physics, gravity, and collision simulation
2. [Unity for Human-Robot Interaction](./module2/unity_human_robot_interaction.md) - Rendering, environments, and interaction logic
3. [Sensor Simulation](./module2/sensor_simulation.md) - LiDAR, depth cameras, IMUs, and data flow to ROS 2

### Module 4: Vision-Language-Action (VLA) & Capstone
1. [Voice-to-Action – Speech Input, Command Parsing, ROS 2 Triggers](./docs/module4/voice_to_action_speech_input_command_parsing_ros2_triggers.md) - Speech recognition, command parsing, and ROS 2 integration
2. [LLM Cognitive Planning – Natural Language → Action Sequences in ROS 2](./docs/module4/llm_cognitive_planning_natural_language_action_sequences_ros2.md) - Natural language processing and action sequence generation
3. [Capstone: Autonomous Humanoid – Voice Command, Navigation, Vision, Manipulation](./docs/module4/autonomous_humanoid_voice_command_navigation_vision_manipulation.md) - Full integration of voice, vision, and action systems

## Learning Path

**Beginners**: Start with Module 1 to build foundational knowledge of humanoid robotics concepts before moving to Module 2.

**Advanced Users**: May begin with Module 2 if you already have basic knowledge of robotics fundamentals.

## Prerequisites

- Basic understanding of robotics concepts (for Module 2, Module 1 covers this)
- Familiarity with Linux and command-line tools
- Knowledge of C++ or Python programming
- Understanding of ROS/ROS 2 fundamentals

## Technical Requirements

### For Module 1:
- Mathematics software (MATLAB, Python with NumPy/SciPy)
- Robotics simulation tools (optional)

### For Module 2:
- Gazebo Classic or Garden (for physics simulation)
- Unity 2021.3 LTS or newer (for rendering)
- ROS 2 Humble Hawksbill or newer
- Compatible 3D modeling software (optional)

## Getting Started

Choose your starting module based on your experience level:
- New to humanoid robotics? Start with [Module 1](./module1/fundamentals_humanoid_robots.md)
- Familiar with robotics basics? Begin with [Module 2](./module2/gazebo_fundamentals.md)

Each module includes practical examples and configuration snippets to help you implement the concepts.

## Resources

- [Gazebo Documentation](http://gazebosim.org/)
- [Unity Documentation](https://docs.unity3d.com/)
- [ROS 2 Documentation](https://docs.ros.org/)
- [Robotics Toolbox](https://github.com/petercorke/robotics-toolbox-python)
- [Humanoid Robot Research Papers](https://ieeexplore.ieee.org/)
- [Open Source Robotics Foundation](https://www.osrfoundation.org/)

---

## Docusaurus Information

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
