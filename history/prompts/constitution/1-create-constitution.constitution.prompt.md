---
id: 1
title: Create Constitution
stage: constitution
date: 2025-12-23
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Claude
command: sp.constitution
labels: [constitution,spec-first,ai-book]
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

You are an expert AI engineer working in spec-first mode.

Create an AI-authored technical book using Docusaurus and deploy it to GitHub Pages. Write all specifications first using Spec-Kit Plus and follow them strictly using Claude Code.

The book must be a complete static site for intermediate to advanced developers. All content must be accurate, verifiable, and based on official documentation. No placeholders or speculative content are allowed.

Embed a RAG chatbot inside the book using OpenAI Agents or ChatKit, FastAPI, Neon Serverless Postgres, and Qdrant Cloud. The chatbot must answer only from the book content and support answering based only on user-selected text. Hallucinations are not allowed.

Use clean, modular, well-documented code. Manage all secrets with environment variables. Keep frontend, backend, and data layers separate.

Use only the approved tech stack. Document all build and deployment steps.

The project is successful only if the site builds and deploys correctly, the specs are fully implemented, the chatbot behaves correctly, and the entire project is reproducible from the repository.

Work step by step. Do not skip specs. Do not assume missing requirements.

## Response snapshot

I've created the project constitution for the AI-authored technical book project. The constitution establishes core principles for spec-first development, content accuracy, clean architecture, security, tech stack adherence, and deployment reproducibility. It also defines additional constraints, development workflow standards, and governance rules.

## Outcome

- ✅ Impact: Created foundational constitution document that will guide all project development
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles
- 🔁 Next prompts: Create spec document following Spec-Kit Plus methodology
- 🧠 Reflection: Constitution provides clear governance framework for the AI book project

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS - Constitution properly created with all required sections
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Create the feature specification document