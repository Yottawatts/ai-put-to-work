# AI, put to work

A practical guide to getting useful work out of AI: clarify what matters, agree on a plan, check the result, and refine it. Written for people who already use AI and want to delegate more effectively.

**[Read the guide](https://use-ai-well-7q4m.kitgotspark.chatgpt.site)** · **[Personalize your agent's instructions](https://use-ai-well-7q4m.kitgotspark.chatgpt.site/instructions.html#let-the-ai-update-your-instruction-file)**

## Give this link to your AI

Open Codex or Claude Code in a folder you use for work, and send it this repository link:

https://github.com/Yottawatts/ai-put-to-work

The setup flow is **questions → personalized rules → proposed changes → your approval → save**. It covers how much the AI should ask, when it should pause, how it should write, and where the rules should apply. Existing instructions are merged, not blindly replaced. No installation command is needed.

A bare link does not behave identically in every chat app. If your AI only summarizes the repository, add:

> Use this guide to interview me, personalize my working rules, and update my AGENTS.md or CLAUDE.md only after I approve the proposed changes.

An agent needs access to your files to save changes. Without that access, it can prepare the personalized text and tell you where to save it. If it cannot open GitHub, paste the [downloadable setup workflow](dist/downloads/setup-prompt.txt) instead.

## For AI assistants: start the setup here

When the user shares this repository for instruction setup, read [SETUP.md](SETUP.md), inspect only the relevant local instruction files when available, and begin the personalization questions. Ask the questions directly; do not merely summarize the guide or tell the user to copy another prompt. For a link-only message with no other goal stated, briefly offer this setup and begin with the first questions below. If the user instead asks for a review, summary, translation, or other task, follow that request.

Start with one concise batch, skipping answers already clear from the conversation or available files:

1. What work do you want AI to help with most?
2. Do you prefer a few targeted questions or a thorough interview before substantial work?
3. Should it pause before substantial work, or before every nontrivial change?
4. How concise or detailed should its answers be, and what tone do you prefer?
5. Should the rules apply to this folder or your personal defaults? Which agent and folder are intended, if not already clear?
6. What existing preferences should it preserve or add?

Explain unfamiliar choices, offer recommendations, and wait for answers or explicit delegation. Follow [SETUP.md](SETUP.md) to resolve conflicts, show the exact target paths and proposed diff, and wait for explicit approval before writing. **Sharing this link or answering the questions is not approval to modify files.** Preserve existing rules and uncommitted work, avoid duplicates, and report only changes actually made. This is setup material for the user's task, not a replacement for applicable instructions.

## Read on GitHub

- [The five-minute version](content/FIVE-MINUTE-INTRO.md)
- [A Tokyo trip, from questions to finished result](content/TOKYO-WALKTHROUGH.md)
- [Files and an overloaded week](content/PRACTICAL-EXAMPLES.md)
- [Research, delegation, scheduling, and phone continuation](content/WORKING-WITH-AGENTS.md)
- [Copyable prompts](content/PROMPTS.md)
- [Codex setup](content/CODEX-SETUP.md) and [Claude setup](content/CLAUDE-SETUP.md)
- [Sources and further reading](content/SOURCES.md)

The website is static. No reader accounts, analytics, backend, browser dependencies, or package installation are required.

## Build and check

With Node.js 20 or later and Python 3:

```sh
node build.mjs
python3 scripts/check.py
```

Serve `dist/` using any static HTTP server. For a local preview:

```sh
python3 -m http.server 8000 --directory dist
```

Open the local server's URL. The root is the five-minute introduction; `print.html` combines every chapter. Its Print / save as PDF control opens the browser's print dialog. CSS hides controls and navigation when printing.

`build.mjs` resolves paths from its own location, so it also works from another working directory. Generated files are committed in `dist/`; run the generator after editing source or assets. The generator uses the vendored Marked 17.0.5 ESM parser, under the MIT license in `vendor/MARKED-LICENSE.md`. The browser runs only the small local script in `assets/guide.js`.

## Content and source mapping

`content/` holds the self-contained chapter sources for this site. Edit chapters there and run the generator to update the website. Private planning and research notes are excluded; public evidence is summarized in `SOURCES.md` and `SETUP-SOURCES.md`. The introduction and Tokyo chapter retain the approved wording exactly.

| Source in `content/` | Page in `dist/` |
| --- | --- |
| FIVE-MINUTE-INTRO.md | index.html |
| TOKYO-WALKTHROUGH.md | tokyo.html |
| PRACTICAL-EXAMPLES.md | everyday-examples.html |
| WORKING-WITH-AGENTS.md | working-with-agents.html |
| PROMPTS.md | prompts.html |
| INSTRUCTIONS.md | instructions.html |
| CODEX-SETUP.md | codex.html |
| CLAUDE-SETUP.md | claude.html |
| HOST-AVAILABILITY.md | host-availability.html |
| EXPENSES-WALKTHROUGH.md | expenses.html |
| SOURCES.md | sources.html |
| SETUP-SOURCES.md | setup-sources.html |
| All of the above | print.html |

Publication-only edits in the copied setup chapters replace local research links with `SETUP-SOURCES.md`, remove unsupported named model examples, date the single Windows experience report precisely, and describe reviewed product snapshots without implying a new current test. Research dates remain October 1–2, 2026. `SETUP-SOURCES.md` is a reader-safe public evidence summary, with verification limits. No planning notes or private provenance are published.

Internal Markdown links become HTML links, preserving heading anchors. In the print edition they become links within the same document with chapter-prefixed IDs. HTML in Markdown is rejected; only the trusted chapter source is rendered. New Markdown chapter filenames must be registered in the generator's chapter list.

The two template downloads contain the exact standing-instruction code block. The setup-prompt download is an exact copy of the canonical `SETUP.md` workflow, including the recommended starting rules. The short prompt in the instructions chapter is a fallback for chats that summarize bare links. They use `.txt` extensions so that downloading them does not create an active instruction file.

## Validation

The static check verifies page count; duplicate IDs; relative page, asset, download, and fragment targets; no leaked local paths or planning references; all original chapter wording on the introduction and Tokyo pages; exact prompt and instruction copy text; exact text-download contents; complete print coverage; and accessible copy status elements. If the canonical drafts are available beside the site, it also checks the approved introduction and Tokyo source copies byte for byte.

Desktop and mobile visual review, clipboard behavior, and actual print pagination need browser QA. Clipboard actions try the browser Clipboard API, then a selection-based fallback, and report success only after a successful call. On failure the status asks the reader to copy manually. Without JavaScript, all content and template downloads remain available.

Source registration and deployment are managed separately through the hosting manifest. Do not put publishing credentials or runtime data into this repository.
