# Data Model: Book Structure

This document outlines the key entities for defining the structure and organization of the "Physical AI & Humanoid Robotics" book, based on the feature specification and constitutional guidelines.

## Entities

### Book Part

Represents a major thematic section or module of the book. Each Part groups related chapters/modules.

-   **Name**: Unique identifier and display title for the Part (e.g., "Foundations of Physical AI", "Robotic Nervous System (ROS 2)").
-   **Description**: A brief overview of the Part's thematic content.
-   **Sequence**: An integer indicating the order of the Part within the book.
-   **Chapters**: A collection of `Book Chapter/Module` entities associated with this Part.

### Book Chapter/Module

Represents a specific topic, lesson, or conceptual unit within a `Book Part`. Each chapter will correspond to a Markdown file.

-   **Title**: Unique display title for the Chapter (e.g., "What is Physical AI", "ROS 2 Concepts").
-   **File Name**: The name of the Markdown file (e.g., `what-is-physical-ai.md`).
-   **File Path**: The relative path to the Markdown file within the `docusaurus-text-book/docs/` directory, reflecting its hierarchical position (e.g., `part1-foundations/what-is-physical-ai.md`).
-   **Description**: A brief summary of the chapter's content.
-   **Sequence**: An integer indicating the order of the Chapter within its parent `Book Part`.
-   **Content Status**: (e.g., "Outline", "Draft", "Review", "Completed").
-   **Key Concepts**: A list of primary concepts covered in the chapter.

## Relationships

-   A `Book` consists of multiple `Book Part` entities.
-   A `Book Part` consists of multiple `Book Chapter/Module` entities.
-   Each `Book Chapter/Module` is associated with exactly one `Book Part`.

## Validation Rules (Content & Structure)

-   All `Book Part` and `Book Chapter/Module` entities MUST have unique names/titles within their respective scopes.
-   `File Name` and `File Path` MUST conform to established naming conventions (e.g., kebab-case for file names, logical folder structure).
-   `Sequence` numbers MUST be consecutive and unique within each hierarchical level (Parts, then Chapters within Parts).
-   `Content Status` MUST track the progress of each chapter's development.