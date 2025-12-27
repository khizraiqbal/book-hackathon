# Quick Start Guide: Module 1 - Introduction to Humanoid Robotics

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git for version control
- Basic understanding of Markdown syntax
- Knowledge of Docusaurus basics (optional but helpful)
- Mathematical background (recommended for kinematics chapter)

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

## Module 1 Content Overview

Module 1 covers foundational concepts in humanoid robotics and consists of three chapters located in `book-website/docs/module1/`:

1. **Fundamentals of Humanoid Robots** (`fundamentals_humanoid_robots.md`)
   - History and development of humanoid robots
   - Key components and subsystems
   - Degrees of freedom and joint configurations
   - Applications and use cases

2. **Kinematics and Mathematical Foundations** (`kinematics_mathematical_foundations.md`)
   - Forward and inverse kinematics
   - Denavit-Hartenberg parameters
   - Coordinate systems and transformations
   - Jacobian matrices and motion planning

3. **Control Systems and Basic Locomotion** (`control_systems_locomotion.md`)
   - Control theory applications in robotics
   - Balance and stability control
   - Basic walking patterns and gait generation
   - Sensor integration for feedback control

### Creating New Chapters

To create additional chapters:

1. Create a new `.md` file in the `book-website/docs/module1/` directory
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
- Use proper mathematical notation for equations

## Deployment

The site can be deployed to GitHub Pages using:
```bash
npm run deploy
```

This command builds the site and pushes it to the `gh-pages` branch for GitHub Pages hosting.