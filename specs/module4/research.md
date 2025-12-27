# Research: Module 4 – Vision‑Language‑Action (VLA) & Capstone

## Decision: Module Structure
**Rationale**: Following the existing pattern of the book website with modules organized in both the main docs/ directory and as separate module directories. Module 4 will follow the same structure as Modules 1-3 with 3 distinct chapters.
**Alternatives considered**: Single flat structure vs. nested module structure - chose nested to maintain consistency with existing modules.

## Decision: Docusaurus Integration
**Rationale**: The existing book-website already uses Docusaurus as evidenced by the docusaurus.config.js and sidebars.js files. Continuing with Docusaurus ensures consistency and leverages existing infrastructure.
**Alternatives considered**: Jekyll, Hugo, GitBook - chose Docusaurus to maintain consistency with existing project.

## Decision: Content Format
**Rationale**: All content must be in Markdown (.md) format as specified in requirements. This ensures compatibility with Docusaurus and maintainability.
**Alternatives considered**: ReStructuredText, AsciiDoc - chose Markdown for consistency with existing content.

## Decision: Chapter Topics
**Rationale**: The three chapters align with the VLA concept: voice input, cognitive planning, and integrated capstone. This provides a logical progression from input to planning to execution.
**Alternatives considered**: Different chapter breakdowns - chose the specified topics to match the requirements.

## Decision: File Naming Convention
**Rationale**: Using descriptive, SEO-friendly filenames with underscores separating words, following the pattern of other modules in the repository.
**Alternatives considered**: Shortened names vs. descriptive names - chose descriptive to ensure clarity of content.

## Decision: Technical Implementation Approach
**Rationale**: Each chapter will include code examples using ROS 2, OpenAI APIs, and Python as these are the technologies mentioned in the requirements. Examples will be practical and implementation-focused.
**Alternatives considered**: Theoretical vs. practical approach - chose practical implementation-focused content to match requirements.