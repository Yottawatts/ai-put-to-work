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

Open Codex or Claude Code in the folder where you want these preferences to apply, then give it [this GitHub link](https://github.com/Yottawatts/ai-put-to-work). The repository starts with directions for the AI to interview you, personalize the rules, and show the proposed change. It saves only after you approve.

The questions cover your usual tasks, question depth, approval checkpoints, answer detail and tone, and whether the rules apply to one folder or your personal defaults. You can ask it to use the recommended defaults for any choice. It should preserve existing instructions, explain conflicts, and avoid adding duplicate rules.

If your AI only summarizes the link, paste this short request:

```text
Use https://github.com/Yottawatts/ai-put-to-work to interview me and personalize my working rules. Read its SETUP.md and inspect the relevant existing instructions. Show the target paths and proposed changes to AGENTS.md or CLAUDE.md, then wait for my approval before saving. Preserve unrelated rules. If you cannot access my files, prepare the text and explain where to save it instead.
```

The [complete setup workflow](https://github.com/Yottawatts/ai-put-to-work/blob/main/SETUP.md) also includes the starting rules. If GitHub is unavailable to your agent, download the setup text from this page and paste it into the chat. A chat without file access can draft the rules; it cannot claim to have installed them.

## Save them once and check the behavior

Ask the agent to inspect existing instructions before adding this text. Merge compatible preferences and flag conflicts; do not replace a project's existing rules blindly. For ordinary chat apps, use their supported custom or project instructions when available, or paste the [everyday prompt](PROMPTS.md#everyday-mode) into the task.

After saving, start a fresh task in the intended folder. Ask which instruction files it loaded and where they apply, then try an ambiguous practice request such as “Help me organize this list.” Check whether it asks the relevant questions before committing to a substantial approach. A claim that it loaded the file is useful to investigate, but its behavior still needs checking.

These instructions are an original adaptation of the [interview](https://github.com/mattpocock/skills/blob/85f83d3fde1d3a90d5c9a657f6998c79a6c37308/skills/productivity/grilling/SKILL.md), [planning](https://github.com/obra/superpowers/blob/5bf4e78011075bcfc0dc295f0724994cd123ee71/skills/brainstorming/SKILL.md), and [execution](https://github.com/open-gsd/gsd-core/blob/238bee7b0357b68aa253df20850ffe4d4f407ed4/gsd-core/workflows/execute-plan.md) approaches used in this guide. You do not need to install those frameworks to use the instructions. An interview skill or larger framework can be an optional next step if the simpler setup leaves a specific need unmet.
