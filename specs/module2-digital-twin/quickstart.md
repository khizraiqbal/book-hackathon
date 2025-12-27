# Quick Start Guide: Module 2 - The Digital Twin (Gazebo & Unity)

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git for version control
- Basic understanding of Markdown syntax
- Knowledge of Docusaurus basics (optional but helpful)
- Familiarity with Gazebo and Unity (recommended)
- Understanding of ROS 2 concepts (recommended)

## Project Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd [repository-name]
```

2. Navigate to the book-website directory:
```bash
cd book-website
```

3. Install dependencies:
```bash
npm install
```

## Docusaurus Configuration

The project uses Docusaurus 2.x with the following configuration:

- **Static Site Generator**: Docusaurus Classic Preset
- **Documentation Path**: `/docs` directory
- **Navigation**: Configured in `sidebars.js`
- **Styling**: Custom CSS in `src/css/custom.css`

## Module 2 Content Overview

Module 2 covers digital twin technology for humanoid robots and consists of three chapters located in `book-website/docs/module2/`:

1. **Gazebo Fundamentals** (`gazebo_fundamentals.md`)
   - Digital twins concepts and applications
   - Physics simulation principles
   - Gravity and collision modeling
   - Configuration and setup

2. **Unity for Human-Robot Interaction** (`unity_human_robot_interaction.md`)
   - High-fidelity rendering techniques
   - Environment building in Unity
   - Interaction logic and user interfaces
   - Integration with robotics frameworks

3. **Sensor Simulation** (`sensor_simulation.md`)
   - LiDAR simulation in virtual environments
   - Depth camera modeling
   - IMU simulation
   - Data flow to ROS 2

### Creating New Chapters

To create additional chapters:

1. Create a new `.md` file in the `book-website/docs/module2/` directory
2. Add the file path to the `sidebars.js` configuration
3. Ensure the content follows the 800-1200 word requirement
4. Test the navigation locally

## Local Development

Start the development server:
```bash
npm start
```

This will start a local development server and open your browser to the documentation site. Most changes are reflected live without restarting the server.

## Building the Site

To build the static content:
```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Navigation Structure

The sidebar navigation is configured in `sidebars.js` and includes:
- Module 1: The Robotic Nervous System (ROS 2)
- Module 1: Introduction to Humanoid Robotics
- Module 2: The Digital Twin (Gazebo & Unity)
- Module 3: The AI-Robot Brain (NVIDIA Isaac™)

## Content Guidelines

- All content must be in Markdown format
- Chapters should be 800-1200 words
- Include technical examples where appropriate
- Follow consistent formatting and structure
- Ensure content accuracy and verification
- Use official Gazebo, ROS 2, and Unity documentation

## Deployment

The site can be deployed to GitHub Pages using:
```bash
npm run deploy
```

This command builds the site and pushes it to the `gh-pages` branch for GitHub Pages hosting.