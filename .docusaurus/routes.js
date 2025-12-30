import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd64'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '270'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '773'),
            routes: [
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter1_introduction_to_humanoid_robotics',
                component: ComponentCreator('/docs/module1/chapter1_introduction_to_humanoid_robotics', 'f18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter2_fundamentals_humanoid_robots',
                component: ComponentCreator('/docs/module1/chapter2_fundamentals_humanoid_robots', 'c95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/chapter3_kinematics_mathematical_foundations',
                component: ComponentCreator('/docs/module1/chapter3_kinematics_mathematical_foundations', '54e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/chapter1_introduction_to_digital_twins',
                component: ComponentCreator('/docs/module2/chapter1_introduction_to_digital_twins', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/chapter2_gazebo_fundamentals',
                component: ComponentCreator('/docs/module2/chapter2_gazebo_fundamentals', '21b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/chapter3_unity_human_robot_interaction',
                component: ComponentCreator('/docs/module2/chapter3_unity_human_robot_interaction', '406'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/chapter1_introduction_to_ai_robot_brain',
                component: ComponentCreator('/docs/module3/chapter1_introduction_to_ai_robot_brain', 'c77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/chapter2_nvidia_isaac_sim',
                component: ComponentCreator('/docs/module3/chapter2_nvidia_isaac_sim', 'f83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/chapter3_isaac_ros',
                component: ComponentCreator('/docs/module3/chapter3_isaac_ros', '093'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/chapter1_introduction_to_vla_systems',
                component: ComponentCreator('/docs/module4/chapter1_introduction_to_vla_systems', 'e0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/chapter2_voice_to_action_speech_input_command_parsing_ros2_triggers',
                component: ComponentCreator('/docs/module4/chapter2_voice_to_action_speech_input_command_parsing_ros2_triggers', '6dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/chapter3_llm_cognitive_planning_natural_language_action_sequences_ros2',
                component: ComponentCreator('/docs/module4/chapter3_llm_cognitive_planning_natural_language_action_sequences_ros2', '4ef'),
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
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
