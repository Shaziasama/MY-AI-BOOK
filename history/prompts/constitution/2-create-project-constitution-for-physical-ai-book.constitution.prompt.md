---
id: 2
title: Create Project Constitution for Physical AI Book
stage: constitution
date: 2025-12-25
surface: agent
model: gemini-1.5-pro-001
feature: none
branch: main
user: shazia zohaib
command: /sp.constitution
labels: ["constitution", "documentation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

/sp.constitution You are using Spec-Kit Plus.

Create a file named:

/sp/constitution.md

This file defines the constitution (source of truth) for a book-based project.

---

# Project Overview

Project title:
**Physical AI & Humanoid Robotics**

This project is a Docusaurus-based educational book.  
The book already exists, but its history, vision, scope, and governance were never formally written.  
Your task is to write that missing constitution.

The book is the primary artifact.  
A RAG chatbot may be added later and must strictly follow this constitution.

---

# Purpose of the Book

Explain that the purpose of the book is to teach **Physical AI and Humanoid Robotics**, focusing on how intelligence moves from software into real, embodied systems.

The book should help learners understand:
- Embodied intelligence
- Physical AI systems
- Humanoid robotics
- Simulation-first development
- Perception, planning, and control
- Language-driven robot behavior

---

# Long-Term Vision

Describe a long-term vision where:
- The book acts as the single source of truth
- Knowledge is structured, reusable, and auditable
- Learning happens through clear conceptual progression
- A future RAG chatbot can safely rely on the book
- Human-readable documentation comes before automation

---

# Scope Definition

## Included Scope
Clearly include:
- Physical AI concepts
- Humanoid robotics
- ROS 2 fundamentals
- Simulation environments
- Perception and navigation
- Vision–Language–Action pipelines
- System-level understanding

## Excluded Scope
Explicitly exclude:
- Hardware manufacturing
- Electronics-level engineering
- Commercial robot production
- Non-educational content
- Implementation of RAG systems
- Databases, APIs, or deployment logic

---

# Canonical Curriculum Structure

Define the following modules as official and stable:

## Module 1 — The Robotic Nervous System (ROS 2)
Cover:
- Nodes, topics, services
- Communication model
- Python integration using rclpy
- URDF for humanoid structure

## Module 2 — The Digital Twin (Gazebo & Unity)
Cover:
- Physics simulation
- Gravity and collisions
- Environment modeling
- Sensor simulation
- Human–robot interaction

## Module 3 — The AI-Robot Brain (NVIDIA Isaac)
Cover:
- Isaac Sim
- Synthetic data generation
- Isaac ROS
- Visual SLAM
- Navigation (Nav2)
- Motion planning

## Module 4 — Vision–Language–Action (VLA)
Cover:
- Speech-to-text (Whisper-style)
- Language understanding
- Task decomposition
- Action planning
- Execution through ROS

---

# Capstone Project

Define a capstone titled:

**The Autonomous Humanoid**

It must describe:
- Receiving voice commands
- Interpreting user intent
- Planning actions
- Navigating an environment
- Detecting and manipulating objects
- Demonstrating embodied intelligence end-to-end

---

# RAG Chatbot (Future Component)

Add a section defining a future Retrieval-Augmented Generation (RAG) chatbot.

State clearly that:
- The chatbot uses ONLY this book as its knowledge source
- It must retrieve content before answering
- It must never hallucinate or add external facts
- It must support answering based on selected book text
- It must refuse if information is not present
- Citations or references to book sections are required

---

# Separation of Responsibilities

Define two roles:

### Book
- Source of truth
- Curriculum and explanations
- Concept definitions
- Learning structure

### RAG System
- Chunking
- Embedding
- Retrieval
- Answer generation
- User interaction

State clearly that the RAG system can never modify or override book content.

---

# Design Principles

Include principles such as:
- Single source of truth
- Clarity before automation
- Education-first design
- Modularity
- Future extensibility
- Traceability and auditability

---

# Out of Scope (For Now)

Explicitly list:
- RAG implementation code
- Vector databases
- Backend APIs
- Authentication
- Deployment pipelines
- User accounts
- Analytics

---

# Authority Statement

State that:
- This constitution governs the entire project
- All future `/sp.specify`, `/sp.plan`, and `/sp.tasks` must conform to it
- It serves as the historical and conceptual foundation

---

Formatting rules:
- Output only Markdown
- Clean professional documentation
- No emojis
- No explanations outside the document
- Ready to be saved as `/sp/constitution.md`

Generate the constitution now.

## Response snapshot

I have created the project constitution at `.specify/memory/constitution.md`.

**Version**: 1.0.0
**Commit Suggestion**: `docs: establish v1.0.0 of project constitution`

The following templates should be reviewed to ensure they align with the new constitution:
- `.specify/templates/plan-template.md`
- `.specify/templates/spec-template.md`
- `.specify/templates/tasks-template.md`

## Outcome

- ✅ Impact: Created the foundational governance and scope document for the project.
- 🧪 Tests: N/A
- 📁 Files: 1 created/modified
- 🔁 Next prompts: Review dependent templates, begin feature specification.
- 🧠 Reflection: The process of creating a constitution from a detailed prompt is straightforward. The key is to map the user's semantic sections to the formal structure of the constitution document, including adding the necessary governance and versioning metadata. The sync report is a critical piece of output to guide future work.
