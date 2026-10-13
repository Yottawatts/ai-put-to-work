# Set up Codex for work on your computer

Checked October 2, 2026 (Korea; October 1 UTC). Interfaces and account access change. These steps use a reviewed GitHub code snapshot and the installed desktop build's interface text; installation, phone pairing, and scheduled execution were not tested. [Evidence and exact sources](SETUP-SOURCES.md#codex).

## Get one useful task working

Use the account you already have. Start at the desktop App link in the [Codex repository](https://github.com/openai/codex/blob/dd90f160ed9bf91320c417335ddff848b6a23dd0/README.md), follow the graphical download/setup offered for macOS or Windows, and sign in with your ChatGPT account. If your installed ChatGPT desktop app already provides Codex work, use that entry. A roughly $20 subscription or employer-paid account does not establish every model, tool, or remote feature; check what your signed-in workspace actually offers. An API key is a separate route, so do not buy API credits just to follow this guide.

On a Mac, use Finder to make a small practice folder. On Windows, use File Explorer. Put copies of a few ordinary files there, then select that folder for a local task in the app. Avoid starting with your whole home directory. The app can have several execution destinations; confirm that this task points to the intended computer and folder.

Paste:

> Tell me which computer and folder this task uses, and what files you can access. List the practice files, then create a short inventory document in this folder. Open it for me and check that every listed file exists. Preserve the originals. If you lack access, explain what is missing.

The AI does the checking. You should be able to open the document and recognize its contents. That establishes the starting point for the [Downloads example](PRACTICAL-EXAMPLES.md). A confident response alone does not establish file access.

## Give it short standing instructions

For a folder you will reuse, use the [instruction-file merge prompt](INSTRUCTIONS.md#let-the-ai-update-your-instruction-file). Ask Codex to merge the preferences into the selected folder's `AGENTS.md`, or create it if absent. Review its proposed diff before saving; keep stable preferences there and the current task's decisions in its plan.

Then ask:

> Check the working directory and applicable instruction files. Show their paths and summarize the rules that affect this task. Tell me about overrides or instructions you could not load.

Placement matters. In the reviewed code snapshot, project instructions are collected along the project-root-to-working-directory path. Without a recognized project-root marker, automatic discovery considers only the working directory. Instructions somewhere above an ordinary nested folder are therefore not guaranteed to load. More specific files and override files can also matter. [Instruction discovery code](https://github.com/openai/codex/blob/dd90f160ed9bf91320c417335ddff848b6a23dd0/codex-rs/core/src/agents_md.rs).

Personal defaults across tasks can live in the actual Codex home folder, but start with the one task folder. Ask the agent to identify its Codex home before requesting a global change. Keep work-specific instructions out of unrelated projects. Instructions guide behavior; they do not grant access or guarantee compliance.

## Choose effort, then consider extra agents

Start with the app's default model. For a difficult decision or substantial review, choose a stronger available option and an appropriate reasoning level. For clear extraction or routine formatting, a lighter option may be enough. Check the actual picker and usage allowance; models and supported effort levels come from a filtered catalog. [Model metadata code](https://github.com/openai/codex/blob/dd90f160ed9bf91320c417335ddff848b6a23dd0/codex-rs/app-server/src/models.rs).

Treat the available model and effort options as choices to test on your task, not a proven ranking or subscription promise. A model name alone does not supply tools, original evidence, or independent verification.

For substantial work, you can ask:

> If subagents are available, use one worker for each genuinely independent part and a reviewer who checks the original sources and finished output. Give them bounded assignments and separate file ownership. Tell me if model or role selection is restricted. Stay within my current account; ask before introducing paid services.

One agent is enough for simple tasks. Extra agents consume usage and require integration; they do not make an unchecked answer trustworthy. The facility exists in [Codex's implementation](https://github.com/openai/codex/blob/dd90f160ed9bf91320c417335ddff848b6a23dd0/codex-rs/core/src/tools/handlers/multi_agents_v2/spawn.rs), but its availability and selectable roles vary by environment.

## Continue the task from your phone

In the inspected desktop build, open **Settings → Connections → Control this Mac** or **Control this PC**, then **Add**. Follow its pairing/authorization flow with the ChatGPT app on your phone. Use the same intended account/workspace. If these controls are missing, check app versions and workspace access; do not treat a GitHub code feature as proof that your account has it.

Keep the host connected and running. The inspected build offers **Keep this Mac awake** or **Keep this PC awake** for plugged-in operation while remote access is enabled. Check the setting yourself; it does not establish that a closed laptop lid will work.

Before relying on this, open the host's existing task from your phone and send a harmless follow-up: “Read the inventory and report its file count.” Confirm the response and host identity. This tests conversation continuity on your setup. One September 23 Windows report describes successful phone execution and a desktop setup failure. [The dated report](https://github.com/openai/codex/issues/47555).

The files still live where the task saved them. A local pathname in chat does not automatically create a phone attachment. Ask for a supported preview or export and try opening it on the phone. Chat access and artifact access are separate checks.

## Schedule work after one checked run

If scheduling is available, ask the agent to set up the same job only after you have checked a manual run. Specify timezone, frequency, output, data access, and what to do if a run fails. Review whether it runs locally or in a supported cloud destination and which permissions it uses.

Local scheduled work needs its host and required tools available. Cloud work has its own access; it does not automatically inherit desktop folders or apps. The inspected app has **Scheduled tasks** and **Previous runs** views, including local/cloud distinctions. Check an actual scheduled result before depending on the routine. [Dated implementation notes and limits](SETUP-SOURCES.md#codex).
