# Quickstart Guide for Book Authors

This guide provides a quick overview for authors contributing to the "Physical AI & Humanoid Robotics" book.

## 1. Book Structure Overview

The book is organized into several **Parts**, and each Part contains multiple **Chapters**. This structure is reflected directly in the project's folder hierarchy.

**Example Structure:**
```
docusaurus-text-book/docs/
├── part1-foundations/
│   ├── _category_.json      (Defines Part 1 title and order)
│   ├── chapter1-title.md
│   └── chapter2-title.md
├── part2-ros2/
│   ├── _category_.json      (Defines Part 2 title and order)
│   ├── chapter1-title.md
│   └── ...
└── ...
```

## 2. Creating a New Chapter

1.  **Locate the Correct Part Folder**: Navigate to `docusaurus-text-book/docs/` and then into the appropriate `partX-name/` folder for your chapter. If the part folder doesn't exist, you might need to create it (and an accompanying `_category_.json` file).
2.  **Create a New Markdown File**: Create a new `.md` file for your chapter.
    *   **Naming Convention**: Use `kebab-case` for file names (e.g., `my-new-chapter.md`).
    *   **Front Matter**: Every Markdown file MUST start with Docusaurus front matter:
        ```markdown
        ---
        sidebar_position: X  <-- Set to the chapter's order within the Part
        title: My New Chapter Title
        ---
        ```
        Replace `X` with the sequential position of your chapter within its Part.
3.  **Write Your Content**: Follow the Writing Rules outlined below.

## 3. Writing Rules

Adhere to these rules for consistent quality and readability:

-   **Concept-First**: Introduce and explain concepts thoroughly before delving into examples or technical details.
-   **Simple & Clear English**: Use accessible language. Avoid jargon where simpler terms suffice, or explain technical terms clearly.
-   **Educational Tone**: Maintain an instructive, helpful, and encouraging tone.
-   **No Marketing Language**: Avoid promotional or overly enthusiastic language.
-   **Step-by-Step Flow**: Organize content logically, guiding the reader through topics incrementally.
-   **Consistent Terminology**: Use the same terms for the same concepts throughout the book (refer to existing chapters for guidance).

## 4. Markdown Usage

-   Use standard Markdown syntax for headings, lists, code blocks, etc.
-   For code examples, always specify the language for syntax highlighting (e.g., `` ```python ``).
-   Embed images directly within Markdown using `![Alt text](/img/your-image.png)`. Ensure images are placed in the `static/img/` directory.

## 5. Exclusions (What NOT to Include)

Strictly adhere to the project's scope:
-   DO NOT include content about RAG systems or chatbots (beyond their conceptual exclusion in the constitution).
-   DO NOT include details on vector databases, APIs, or backend services.
-   DO NOT discuss deployment procedures, authentication, or cloud infrastructure.
-   Focus exclusively on the educational content about Physical AI and Humanoid Robotics.

By following these guidelines, you will contribute to a high-quality, consistent, and effective educational resource.