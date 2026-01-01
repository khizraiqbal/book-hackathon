import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '01d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '7d4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4f5'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter1_introduction_to_humanoid_robotics',
                component: ComponentCreator('/docs/module1/chapter1_introduction_to_humanoid_robotics', '2de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter2_fundamentals_humanoid_robots',
                component: ComponentCreator('/docs/module1/chapter2_fundamentals_humanoid_robots', '378'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter3_kinematics_mathematical_foundations',
                component: ComponentCreator('/docs/module1/chapter3_kinematics_mathematical_foundations', 'de0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/chapter1_introduction_to_digital_twins',
                component: ComponentCreator('/docs/module2/chapter1_introduction_to_digital_twins', '3c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/chapter2_gazebo_fundamentals',
                component: ComponentCreator('/docs/module2/chapter2_gazebo_fundamentals', '987'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/chapter3_unity_human_robot_interaction',
                component: ComponentCreator('/docs/module2/chapter3_unity_human_robot_interaction', '98b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/chapter1_introduction_to_ai_robot_brain',
                component: ComponentCreator('/docs/module3/chapter1_introduction_to_ai_robot_brain', 'fb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/chapter2_nvidia_isaac_sim',
                component: ComponentCreator('/docs/module3/chapter2_nvidia_isaac_sim', 'ce0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/chapter3_isaac_ros',
                component: ComponentCreator('/docs/module3/chapter3_isaac_ros', 'a69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/chapter1_introduction_to_vla_systems',
                component: ComponentCreator('/docs/module4/chapter1_introduction_to_vla_systems', 'e24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/chapter2_voice_to_action_speech_input_command_parsing_ros2_triggers',
                component: ComponentCreator('/docs/module4/chapter2_voice_to_action_speech_input_command_parsing_ros2_triggers', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/chapter3_llm_cognitive_planning_natural_language_action_sequences_ros2',
                component: ComponentCreator('/docs/module4/chapter3_llm_cognitive_planning_natural_language_action_sequences_ros2', '1a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '614'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
