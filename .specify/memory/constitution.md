<!--
Sync Impact Report:
Version change: 0.1.0 → 1.0.0
Added sections: All principles and governance sections
Modified principles: None (new constitution)
Removed sections: None
Templates requiring updates: ✅ .specify/templates/plan-template.md, ✅ .specify/templates/spec-template.md, ✅ .specify/templates/tasks-template.md
Follow-up TODOs: None
-->
# AI Technical Book Constitution

## Core Principles

### I. Spec-First Development
All development must begin with comprehensive specifications using Spec-Kit Plus. No implementation work begins without approved, complete specifications that detail requirements, acceptance criteria, and architectural decisions.

### II. Content Accuracy and Verification
All book content must be accurate, verifiable, and based on official documentation. No placeholders, speculative content, or unverified information is allowed. All claims must be backed by authoritative sources.

### III. Clean, Modular Architecture (NON-NEGOTIABLE)
Code must be clean, modular, well-documented, and follow separation of concerns. Frontend, backend, and data layers must remain separate. Components must be independently testable and reusable where appropriate.

### IV. Security and Secrets Management
All secrets must be managed through environment variables. No hardcoded credentials, API keys, or sensitive information in source code. All security best practices must be followed in both frontend and backend implementations.

### V. Tech Stack Adherence
Use only the approved technology stack: Docusaurus for the static site, OpenAI Agents or ChatKit for the RAG chatbot, FastAPI for the backend, Neon Serverless Postgres for the database, and Qdrant Cloud for vector storage. No additional technologies without explicit approval.

### VI. Deployment and Reproducibility
The entire project must be reproducible from the repository. All build and deployment steps must be documented and automated. GitHub Pages deployment must be successful and reliable.

## Additional Constraints and Requirements

Technology Stack: Docusaurus, OpenAI Agents/ChatKit, FastAPI, Neon Serverless Postgres, Qdrant Cloud, GitHub Pages.

Performance Standards: Site must load quickly, RAG chatbot must respond within 3 seconds for 95% of queries.

Security Requirements: All API calls must be authenticated, sensitive data must be encrypted, and proper error handling must not expose system details.

## Development Workflow and Quality Standards

Spec-Driven Development: All work follows the Spec-Kit Plus workflow (spec → plan → tasks → implementation).

Testing Requirements: Unit tests for all backend functions, integration tests for API endpoints, and end-to-end tests for critical user flows including the RAG chatbot functionality.

Code Quality: All code must follow established patterns, include proper documentation, and pass linting and security scans.

Review Process: All pull requests must include spec verification, code review, and successful CI/CD pipeline completion before merging.

## Governance

This constitution supersedes all other development practices. All development work must comply with these principles. Amendments require documentation of the change, approval from project maintainers, and an updated implementation plan. All pull requests and code reviews must verify compliance with these principles. Use this constitution as the primary guidance for development decisions.

**Version**: 1.0.0 | **Ratified**: 2025-12-23 | **Last Amended**: 2025-12-23
