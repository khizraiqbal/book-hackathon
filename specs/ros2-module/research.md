# ROS 2 Research Notes

## Official Documentation References

- ROS 2 Documentation: https://docs.ros.org/en/humble/
- rclpy Documentation: https://docs.ros.org/en/humble/p/rclpy/
- URDF Documentation: https://wiki.ros.org/urdf

## Core ROS 2 Concepts

### Nodes
- A node is an executable that uses ROS 2 to communicate with other nodes
- Nodes contain the business logic of the ROS 2 system
- Multiple nodes can run on the same system or across multiple systems

### Topics
- Topics are named buses over which nodes exchange messages
- Publishers send messages to topics, subscribers receive messages from topics
- Communication is asynchronous and follows a publish-subscribe pattern

### Services
- Services provide synchronous request-response communication
- A service has a client that sends requests and a server that responds to requests
- Communication is synchronous and follows a client-server pattern

## rclpy
- Python client library for ROS 2
- Provides Python API for ROS 2 concepts like nodes, topics, services
- Used to create ROS 2 nodes in Python

## URDF (Unified Robot Description Format)
- XML format for representing robot models
- Describes robot structure: links, joints, sensors, and materials
- Used for simulation and visualization of robots