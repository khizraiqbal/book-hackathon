# ADR: Multi-Module Course Structure for Humanoid Robotics Education

## Status
Accepted

## Date
2025-12-25

## Context
We need to structure a comprehensive educational program for humanoid robotics that accommodates learners at different levels, from beginners to advanced practitioners. The course must cover both fundamental concepts and advanced simulation techniques while maintaining pedagogical coherence and technical accuracy.

## Decision
We will structure the course as two distinct but connected modules:

1. **Module 1: Introduction to Humanoid Robotics** - Focuses on fundamental concepts, kinematics, and control systems for beginners
2. **Module 2: The Digital Twin (Gazebo & Unity)** - Focuses on advanced simulation techniques for those with basic robotics knowledge

Each module contains three 800-1200 word chapters in Markdown format, with clear learning progressions and practical examples.

## Alternatives Considered
- **Single comprehensive course**: Would create a monolithic resource difficult to navigate and potentially overwhelming for beginners
- **More granular micro-modules**: Would fragment the learning experience and create disconnected concepts
- **Different module focus**: Could organize by technology stack rather than skill level, but this would confuse learning progression
- **Linear progression only**: No option for advanced users to skip foundational content if already known

## Consequences
### Positive
- Beginners can build foundational knowledge before advancing to complex topics
- Advanced users can begin with Module 2 if they already have basic knowledge
- Clear skill progression from fundamentals to advanced simulation
- Modular structure allows for updates to individual modules without affecting the whole
- Follows established patterns for technical education

### Negative
- May require more navigation between modules for integrated understanding
- Could lead to knowledge gaps if students skip between modules without proper assessment
- Requires careful cross-referencing to maintain connections between concepts
- More complex to maintain than a single module approach

## References
- Humanoid robotics education best practices
- Pedagogical patterns for technical education
- Industry standards for robotics curriculum design
- Docusaurus documentation patterns