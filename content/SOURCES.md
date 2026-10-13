# Sources and further reading

This guide adapts practices from community GitHub projects for everyday tasks. It is original writing, not a promise that installing a framework makes an agent reliable. Repository activity and popularity helped identify sources; neither measures how well a workflow will work for you.

## The main method

These four source files were checked on September 28, 2026. The links point to the versions used in the approved introduction.

| Source | What this guide takes from it |
|---|---|
| [Matt Pocock's grilling skill](https://github.com/mattpocock/skills/blob/85f83d3fde1d3a90d5c9a657f6998c79a6c37308/skills/productivity/grilling/SKILL.md) | Ask about decisions the user needs to make, group independent questions, investigate facts, and confirm shared understanding. |
| [Superpowers brainstorming](https://github.com/obra/superpowers/blob/5bf4e78011075bcfc0dc295f0724994cd123ee71/skills/brainstorming/SKILL.md) | Clarify the intended result and obtain approval before substantial execution. |
| [GSD execution](https://github.com/open-gsd/gsd-core/blob/238bee7b0357b68aa253df20850ffe4d4f407ed4/gsd-core/workflows/execute-plan.md) | Distinguish objective repairs from changes requiring a new decision, and check the result against acceptance criteria. |
| [Planning with Files](https://github.com/OthmanAdi/planning-with-files/blob/51c1caa27f9fefe259e45a7cc92fa79ee8787cd7/skills/planning-with-files/SKILL.md) | Save the plan, findings, and progress so ongoing work can resume. |

Our adaptation permits clear, small tasks to proceed directly; uses question batches of up to ten; and requires approval after an important trial before expanding. Those choices combine the sources with the author's preferences. They are not all prescribed by any one repository.

For separate worker and reviewer roles, the guide also references [Superpowers subagent execution](https://github.com/obra/superpowers/blob/b36e0829c6d0140e93cfef2ca599b1b07d4a7797/skills/subagent-driven-development/SKILL.md), inspected during the September 18 review. The guide keeps decisions about unresolved user preferences with the user.

## Product setup

The [Codex](CODEX-SETUP.md) and [Claude](CLAUDE-SETUP.md) sections state their individual research dates, using product repositories, relevant community implementations, and, for Codex, the installed desktop app's interface resources. Each section links its supporting evidence and states what was not tested. Current repository code is not proof that a feature is available in every account or app build.

We did not perform new installations, phone pairing, scheduled runs, or account connections for this guide. Follow the small access tests in the setup sections on your own devices. Product menus, models, limits, and connection behavior can change independently of the general workflow.

## Optional deeper learning

[Claude Code for Everyone](https://github.com/carlvellotti/free-ai-courses) is a further-learning option for nondevelopers, identified in the September source review. Its lessons were not adapted into this guide. Its course structure and current coverage should be checked before committing to it.

Framework installation is optional. Start with the [copyable prompts](PROMPTS.md) and [short working instructions](INSTRUCTIONS.md). Add a tool or framework when you can name the specific problem it will solve.
