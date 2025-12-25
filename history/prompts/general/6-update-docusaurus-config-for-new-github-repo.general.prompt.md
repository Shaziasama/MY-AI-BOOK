---
id: 6
title: Update Docusaurus Config for New GitHub Repo
stage: green
date: 2025-12-25
surface: agent
model: gemini-1.5-flash
feature: general
branch: main
user: Zohaib
command: "Update my Docusaurus project configuration for a new GitHub repository. 

1. The project currently has a file `docusaurus.config.ts` with old GitHub repo links (like `url`, `organizationName`, `projectName`, etc.).
2. I want to create a new GitHub repository and update all references in the config file to point to the new repo.
3. Replace all old URLs, repo names, and GitHub-related references with the new repository info.
4. Keep the rest of the config file intact (theme, navbar, footer, plugins, etc.).
5. Output the updated `docusaurus.config.ts` file ready to use."
labels: ["docusaurus", "configuration", "github", "repo"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - docusaurus-text-book/docusaurus.config.ts
tests_yaml: []
prompt_text: "Update my Docusaurus project configuration for a new GitHub repository. 

1. The project currently has a file `docusaurus.config.ts` with old GitHub repo links (like `url`, `organizationName`, `projectName`, etc.).
2. I want to create a new GitHub repository and update all references in the config file to point to the new repo.
3. Replace all old URLs, repo names, and GitHub-related references with the new repository info.
4. Keep the rest of the config file intact (theme, navbar, footer, plugins, etc.).
5. Output the updated `docusaurus.config.ts` file ready to use."
response_text: "The updated `docusaurus.config.ts` content is provided above. I have replaced all old GitHub repository links and names with the new ones provided by the user, while keeping the rest of the configuration intact."
outcome: Docusaurus configuration file successfully updated with new GitHub repository details.
evaluation: The agent correctly identified the relevant fields in `docusaurus.config.ts` and replaced them with the user-provided new repository information, maintaining the integrity of the rest of the configuration.
---