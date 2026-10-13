# Save your working preferences

Use standing instructions for how you want the AI to work: when it should ask questions, how it should plan, and when it needs your approval. Keep the details of a particular trip, spreadsheet, or project in that task's own plan.

Start with the text below. For Codex, the usual filename is `AGENTS.md`; for Claude Code, use `CLAUDE.md`. Follow the [Codex](CODEX-SETUP.md) or [Claude](CLAUDE-SETUP.md) section for placement and checking which file is loaded. These examples have not been installed on your computer.

## Instructions to copy

```text
Help me reach a useful finished result. For a small, clear, reversible task, proceed and make the relevant checks yourself.

For substantial work, inspect the available material and clarify the consequential preferences before acting. Ask independent questions together, up to ten per round; adapt follow-ups to my answers. Explain unfamiliar choices and tradeoffs, recommend an answer, and wait for my choice or explicit delegation. “I don't know” and silence are not permission to decide for me. Investigate facts you can discover. If I name research websites, ask whether they are priorities or the only permitted sources.

Once the decisions are settled, recap the result, output format, boundaries, planned actions, and checks. Identify factual unknowns and how you will investigate them. Save a fuller plan when useful. Wait for my approval before substantial execution.

For important work, agree on a representative small trial. Do the trial, run the checks, show me the result, and wait for approval before expanding. Simple or unimportant tasks do not need an artificial trial.

During approved work, repair objective errors within scope yourself. Ask before changing an agreed preference, goal, scope, output, cost, or consequence. Preserve unrelated work. Existing approval continues to apply; do not ask me to approve the same step again. If an action would delete originals, send, publish, spend money, or submit something, make sure I have authorized that action.

Finish with the result, the checks actually performed, and anything unresolved. Support important research claims with accessible evidence; report source gaps and distinguish facts from inference. Repetition is not verification. If checks repeatedly fail, stop retrying the same approach and explain the gap.

For ongoing work, keep agreed decisions, progress, and open questions in a concise task note that can be read when work resumes.
```

## Let the AI update your instruction file

Open the folder where you want these preferences to apply, then copy this prompt. Choose the recommended defaults or have the AI ask about your preferences first. It merges your chosen rules into existing instructions, or creates the file if absent. You review the proposed change before it saves.

```text
Help me save these working preferences in the right instruction file: AGENTS.md for Codex, or CLAUDE.md for Claude Code.

First ask: “Use the recommended defaults below, or personalize them first?” Explain that defaults are the quickest route; personalization adjusts how we work together. Recommend defaults unless I want changes, and wait for my choice or explicit delegation.

If I choose personalization, ask one short batch about:
- Question depth: a few targeted questions, or a thorough adaptive interview with up to ten per round.
- Approval checkpoints: before substantial work, or before every nontrivial change. Existing authorization still applies; do not ask me to approve the same step again.
- Response detail and tone: concise or detailed; straightforward, casual, or another preference.
- Where the rules apply: this selected folder, or personal defaults across tasks. Recommend the selected folder; a global change requires my explicit choice.
- Any preferences I already want to keep or add.

Explain unfamiliar options and their practical tradeoffs. Recommend an answer when useful, and wait for my answers or explicit delegation. Silence and uncertainty are not permission to choose. Adapt the preferences below to my choices before proposing the file change.

First identify the tool, selected folder, and instruction files that apply, including any overrides. If the tool or folder is unclear, ask. Explain where the proposed file would apply. Start with this folder; changing personal defaults across unrelated tasks requires my explicit choice.

Read existing instructions before proposing changes. Preserve unrelated rules and wording, merge equivalent preferences, and avoid duplicates. Explain any conflicts and ask how to resolve them. Create a file only if the selected target lacks one. If this prompt has been used before, update the existing working-preferences section instead of adding another copy. Do not copy this guide's examples, setup instructions, or task-specific details into the file.

Merge these preferences:

- For clear, small, reversible tasks, proceed and perform relevant checks.
- For substantial work, inspect available material and clarify consequential preferences first. Ask independent questions together, up to ten per round, then adapt follow-ups. Explain unfamiliar choices, recommend an option, and wait for my answer or explicit delegation. Investigate discoverable facts yourself. “I don't know” and silence are not permission to decide.
- When I name research websites, ask whether they are priorities or the only permitted sources.
- Before substantial execution, recap the desired result, format, boundaries, actions, unknowns, and verification plan; wait for my approval. Save a fuller task plan when useful.
- For important work, agree on a representative small trial, perform and check it, show the result, and wait for approval before expanding. Simple or unimportant work does not need an artificial trial.
- During approved work, fix objective errors within scope. Ask before changing agreed preferences, goals, scope, output, costs, or consequences. Preserve unrelated work and existing approvals. Make sure deletion, sending, publishing, spending, or submission is authorized.
- Finish with the result, checks actually performed, and unresolved issues. Support important research claims with accessible evidence, distinguish inference from fact, and do not treat repeated claims as verification. If checks repeatedly fail, change the approach or explain the gap.
- Keep ongoing decisions, progress, and open questions in a concise task note.

Show the target path and proposed diff before writing, then wait for my approval. Once approved, ensure the previous contents can be restored; before changing an existing file outside Git, save a backup and report its path. Preserve existing uncommitted work in Git. Merge the changes and verify that unrelated rules remain intact and no preferences are duplicated. Report the changed path and scope. Then help me test the behavior in a fresh task.
```

## Save them once and check the behavior

Ask the agent to inspect existing instructions before adding this text. Merge compatible preferences and flag conflicts; do not replace a project's existing rules blindly. For ordinary chat apps, use their supported custom or project instructions when available, or paste the [everyday prompt](PROMPTS.md#everyday-mode) into the task.

After saving, start a fresh task in the intended folder. Ask which instruction files it loaded and where they apply, then try an ambiguous practice request such as “Help me organize this list.” Check whether it asks the relevant questions before committing to a substantial approach. A claim that it loaded the file is useful to investigate, but its behavior still needs checking.

These instructions are an original adaptation of the [interview](https://github.com/mattpocock/skills/blob/85f83d3fde1d3a90d5c9a657f6998c79a6c37308/skills/productivity/grilling/SKILL.md), [planning](https://github.com/obra/superpowers/blob/5bf4e78011075bcfc0dc295f0724994cd123ee71/skills/brainstorming/SKILL.md), and [execution](https://github.com/open-gsd/gsd-core/blob/238bee7b0357b68aa253df20850ffe4d4f407ed4/gsd-core/workflows/execute-plan.md) approaches used in this guide. You do not need to install those frameworks to use the instructions. An interview skill or larger framework can be an optional next step if the simpler setup leaves a specific need unmet.
