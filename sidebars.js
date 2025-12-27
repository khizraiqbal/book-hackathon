// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '📚 Introduction',
      items: [
        'intro',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 1 - Introduction to Humanoid Robotics',
      items: [
        'module1/chapter1_introduction_to_humanoid_robotics',
        'module1/chapter2_fundamentals_humanoid_robots',
        'module1/chapter3_kinematics_mathematical_foundations',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 2 - The Digital Twin (Gazebo & Unity)',
      items: [
        'module2/chapter1_introduction_to_digital_twins',
        'module2/chapter2_gazebo_fundamentals',
        'module2/chapter3_unity_human_robot_interaction',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 3 - The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module3/chapter1_introduction_to_ai_robot_brain',
        'module3/chapter2_nvidia_isaac_sim',
        'module3/chapter3_isaac_ros',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 4 - Vision-Language-Action (VLA) & Capstone',
      items: [
        'module4/chapter1_introduction_to_vla_systems',
        'module4/chapter2_voice_to_action_speech_input_command_parsing_ros2_triggers',
        'module4/chapter3_llm_cognitive_planning_natural_language_action_sequences_ros2',
      ],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;