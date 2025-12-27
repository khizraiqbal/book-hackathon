# Data Model: Module 4 – Vision‑Language‑Action (VLA) & Capstone

## Documentation Structure

### Module 4 Entity
- **id**: string (module4)
- **title**: string ("Vision-Language-Action (VLA) & Capstone")
- **description**: string ("LLM-driven reasoning, voice control, and autonomous humanoid behavior")
- **chapters**: array<Chapter>
- **audience**: array<string> (["Students", "Developers"])
- **focus**: string ("Physical AI & Humanoid Robotics")

### Chapter Entity
- **id**: string (unique identifier)
- **title**: string (chapter title)
- **filename**: string (markdown filename)
- **word_count**: number (800-1200)
- **topics**: `array<string>` (covered topics)
- **prerequisites**: `array<string>` (required knowledge)
- **code_examples**: `array<CodeExample>`

### CodeExample Entity
- **id**: string (unique identifier)
- **language**: string (python, bash, etc.)
- **purpose**: string (what the example demonstrates)
- **content**: string (the actual code)
- **dependencies**: `array<string>` (required libraries/tools)

## Navigation Structure

### Sidebar Entry
- **type**: string ("category" or "doc")
- **label**: string (display name)
- **items**: array<SidebarItem>
- **link**: object (optional link configuration)

### SidebarItem
- **type**: string ("doc", "link", etc.)
- **id**: string (document id)
- **label**: string (display name)

## Content Validation Rules

### Markdown Format
- All content must be in valid Markdown format
- Headers must follow proper hierarchy (#, ##, ###)
- Code blocks must specify language for syntax highlighting
- Links must use relative paths where possible

### Content Requirements
- Each chapter must be 800-1200 words
- Each chapter must include code examples
- Each chapter must include diagrams/flowcharts where applicable
- All content must be Docusaurus-ready

### Technical Accuracy
- All ROS 2 references must be accurate
- All OpenAI API usage must be current
- All code examples must be executable
- All concepts must be clearly explained