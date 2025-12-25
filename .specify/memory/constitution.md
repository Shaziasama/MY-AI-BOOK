<!--
Sync Impact Report:
- Version change: none -> 1.0.0
- Added sections:
  - Project Overview
  - Purpose of the Book
  - Long-Term Vision
  - Scope Definition
  - Canonical Curriculum Structure
  - Capstone Project
  - RAG Chatbot (Future Component)
  - Separation of Responsibilities
  - Design Principles
  - Out of Scope (For Now)
  - Authority Statement
  - Governance
- Removed sections: All generic template sections were replaced.
- Templates requiring updates:
  - ⚠ pending: .specify/templates/plan-template.md
  - ⚠ pending: .specify/templates/spec-template.md
  - ⚠ pending: .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# Project Overview

Project title:
**Physical AI & Humanoid Robotics**

This project is a Docusaurus-based educational book.
The book already exists, but its history, vision, scope, and governance were never formally written.
This constitution formally documents those aspects.

The book is the primary artifact.
A RAG chatbot may be added later and must strictly follow this constitution.

---

# Purpose of the Book

The purpose of the book is to teach **Physical AI and Humanoid Robotics**, focusing on how intelligence moves from software into real, embodied systems.

The book should help learners understand:
- Embodied intelligence
- Physical AI systems
- Humanoid robotics
- Simulation-first development
- Perception, planning, and control
- Language-driven robot behavior

---

# Long-Term Vision

The long-term vision is to establish a canonical, single source of truth for the subject matter.
- The book acts as the single source of truth for all educational content.
- Knowledge is structured, reusable, and auditable.
- Learning happens through clear conceptual progression.
- A future RAG chatbot can safely rely on the book's content without hallucination.
- Human-readable documentation and clear explanations are prioritized before any automation is built on top of it.

---

# Scope Definition

## Included Scope
- Physical AI concepts
- Humanoid robotics
- ROS 2 fundamentals
- Simulation environments (Gazebo, Unity, NVIDIA Isaac Sim)
- Perception and navigation (SLAM, Nav2)
- Vision–Language–Action pipelines
- System-level understanding of how components integrate

## Excluded Scope
- Hardware manufacturing and design
- Electronics-level engineering and circuit design
- Commercial robot production or distribution
- Non-educational content or marketing materials
- Implementation of RAG systems, vector databases, APIs, or deployment logic

---

# Canonical Curriculum Structure

The following modules are defined as the official and stable curriculum.

## Module 1 — The Robotic Nervous System (ROS 2)
- Nodes, topics, services, and actions
- The ROS 2 communication model
- Python integration using rclpy
- Describing humanoid structure with URDF

## Module 2 — The Digital Twin (Gazebo & Unity)
- Physics simulation fundamentals (gravity, collisions)
- Environment modeling and world-building
- Sensor simulation (cameras, LiDAR, IMUs)
- Human–robot interaction in simulated environments

## Module 3 — The AI-Robot Brain (NVIDIA Isaac)
- Introduction to Isaac Sim for photorealistic simulation
- Synthetic data generation for training perception models
- Isaac ROS for hardware-accelerated perception
- Visual SLAM for localization and mapping
- Navigation and motion planning with Nav2

## Module 4 — Vision–Language–Action (VLA)
- Speech-to-text for voice command input
- Language understanding and intent recognition with LLMs
- Hierarchical task decomposition and planning
- Action sequencing and execution through ROS 2 interfaces

---

# Capstone Project

The capstone project is titled: **The Autonomous Humanoid**.

It must describe a complete, end-to-end system that demonstrates embodied intelligence by:
- Receiving and interpreting voice commands from a user.
- Interpreting the user's intent to formulate a goal.
- Planning a sequence of actions to achieve the goal.
- Navigating a simulated environment.
- Detecting and manipulating objects as required by the task.

---

# RAG Chatbot (Future Component)

A future Retrieval-Augmented Generation (RAG) chatbot may be developed as a companion to the book.

The chatbot's operation is strictly governed by the following rules:
- It MUST use ONLY this book as its knowledge source.
- It MUST retrieve content from the book before generating an answer.
- It MUST NEVER hallucinate or invent facts not present in the book.
- It MUST support answering questions based on user-selected text from the book.
- It MUST refuse to answer if the information is not present in its knowledge source.
- All answers MUST include citations or references to the specific book sections used.

---

# Separation of Responsibilities

The project maintains a strict separation between the book and any future RAG system.

### Book
- The single source of truth for all knowledge.
- Defines the curriculum, explanations, and concepts.
- Provides the learning structure and progression.

### RAG System
- Responsible for chunking and embedding book content.
- Manages the retrieval process from the embedded content.
- Generates answers based on retrieved chunks.
- Handles all user interaction and session management.

The RAG system can never modify, override, or generate content independent of the book.

---

# Design Principles

- **Single Source of Truth**: The book is the canonical and final authority on all subject matter.
- **Clarity Before Automation**: Concepts must be explained clearly for humans before being used in automated systems like a chatbot.
- **Education-First Design**: The primary goal is learning and comprehension, not technological novelty.
- **Modularity**: The curriculum is divided into independent, logically-sequenced modules.
- **Future Extensibility**: The structure allows for new modules or concepts to be added in a controlled manner.
- **Traceability and Auditability**: All information, especially in the RAG system, must be traceable back to its source in the book.

---

# Out of Scope (For Now)

The following components are explicitly out of scope for the current project focus:
- RAG implementation code
- Vector databases
- Backend APIs
- Authentication and user accounts
- Deployment pipelines
- Analytics and user tracking

---

# Authority Statement

This constitution governs the entire project, including all content in the book and the functional requirements of any future systems. All future `/sp.specify`, `/sp.plan`, and `/sp.tasks` commands must conform to the principles and scope defined herein. It serves as the historical, conceptual, and governance foundation for the project.

---

## Governance

This constitution supersedes all other practices and documentation. Amendments require a formal review process, documentation of the changes, and an approved migration plan for any affected components. All development activities and code reviews must verify compliance with this constitution.

**Version**: 1.0.0
**Ratified**: 2025-12-25
**Last Amended**: 2025-12-25
