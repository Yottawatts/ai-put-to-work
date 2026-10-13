# Personalize your AI working rules

Give your AI the repository link and ask it to help you set up your working preferences. It will interview you, show the proposed change, and save it only after you approve. Use an agent with access to the folder where you want the rules to apply. An ordinary chat can prepare the text for you to save.

## Instructions for the AI reading this repository

This is an optional setup workflow for the person sharing this repository. Follow their stated request: if they want to read, summarize, or discuss the guide, do that. If they ask to set up their rules, start the interview below. If they share only the link with no explanation, briefly offer to personalize their working rules and ask the initial personalization questions below. A link alone never authorizes a file change. Follow applicable higher-priority instructions throughout.

### 1. Establish the context and start the interview

Say what you can actually do. With file access, identify the current tool and working folder, then inspect the existing instruction files that apply, including more specific files or overrides. Read them before proposing changes. If the tool or folder is unclear, ask; investigate facts you can discover yourself. With chat-only access, explain that you can draft the rules but cannot inspect or save their files.

Start a concise question batch with: **“What do you mainly want AI to help with, and where do you want these preferences to apply: one folder or your personal defaults across tasks?”** Include the independent preferences below in the same batch when useful. Recommend one folder to start. Explain that personal defaults affect unrelated tasks and require their explicit choice; discover the actual supported location rather than guessing a global path.

Use short, adaptive batches to settle the preferences. Ask independent questions together, up to ten per round, and base follow-ups on the answers. Cover:

- **Question depth:** a few targeted questions, or a thorough interview that helps them discover what they want. Clarify consequential choices in either mode.
- **Approval checkpoints:** recommend approval before substantial execution, with clear, small, reversible tasks handled directly. Offer stricter checkpoints if wanted. Agree what counts as important work and merits a small trial before expansion.
- **Response style:** concise or detailed; straightforward, casual, or their preferred tone. Ask about language if relevant.
- **Existing preferences:** what to preserve, change, or add, including any conflicts you found in the current files.

Use the answers about their tasks to ask useful follow-ups; do not repeat questions already answered. Explain unfamiliar choices, recommend an option, and wait for their answer or explicit delegation. “I don't know” and silence are not permission to decide. If they want the quickest setup, offer the recommended defaults below and ask them to accept or adjust them. Personalization is the normal path.

### 2. Prepare the rules

Adapt this baseline to their choices. Keep stable working preferences concise; task-specific details belong in the task's plan. Do not copy this setup procedure or the guide's examples into their instruction file.

> **Recommended baseline**
>
> - For clear, small, reversible tasks, proceed and perform relevant checks.
> - For substantial work, inspect available material and clarify consequential preferences first. Ask independent questions together, up to ten per round, then adapt follow-ups. Explain unfamiliar choices, recommend an option, and wait for an answer or explicit delegation. Investigate discoverable facts yourself. Uncertainty and silence are not permission to choose.
> - When I name research websites, ask whether they are priorities or the only permitted sources.
> - Before substantial execution, recap the desired result, format, boundaries, actions, unknowns, and verification plan; wait for my approval. Save a fuller task plan when useful.
> - For important work, agree on a representative small trial, perform and check it, show the result, and wait for approval before expanding. Simple or unimportant work does not need an artificial trial.
> - During approved work, fix objective errors within scope. Ask before changing agreed preferences, goals, scope, output, costs, or consequences. Preserve unrelated work and existing approvals. Make sure deletion, sending, publishing, spending, or submission is authorized.
> - Finish with the result, checks actually performed, and unresolved issues. Support important research claims with accessible evidence, distinguish inference from fact, and do not treat repeated claims as verification. If checks repeatedly fail, change the approach or explain the gap.
> - Keep ongoing decisions, progress, and open questions in a concise task note.

### 3. Preview and wait for approval

Choose `AGENTS.md` for Codex or `CLAUDE.md` for Claude Code. Confirm which file and location the actual tool uses; filenames alone do not establish scope or loading. Ask if they want both tools supported before proposing both files.

Merge compatible preferences with the existing rules, preserving unrelated wording and uncommitted changes. Resolve conflicts with the user before writing. Reuse an existing working-preferences section when appropriate, and avoid duplicates on repeated setup. Create the selected file only if it is absent. Do not bypass an applicable override by writing an ineffective file underneath it.

Show the **exact target path, where the rules apply, proposed diff or full new file, and a plain-language summary**. For chat-only sessions, label the result a draft and show where the user should save it once the location is established. Ask for approval of this concrete change, then stop and wait. Answers to interview questions are not approval to save; approval covers only the displayed change.

### 4. Save, verify, and report

After explicit approval, reread the target to detect intervening changes. If it changed, reconcile and show an updated preview before writing. Ensure the previous contents can be restored: preserve uncommitted work in Git; save a backup when the current contents are not recoverable from Git, including uncommitted edits, and report its path. Apply only the approved merge.

Read the result back. Verify the chosen preferences, preservation of unrelated rules, and absence of duplicates. Report the changed path, scope, checks, and any limits on confirming automatic loading. Do not claim a file was saved or loaded without evidence.

Suggest a fresh task in the intended folder: ask which instruction files apply, then try an ambiguous practice request such as “Help me organize this list.” Check whether the AI asks useful questions before substantial work. If you cannot test a fresh session yourself, give the user the test and say it remains unverified.
