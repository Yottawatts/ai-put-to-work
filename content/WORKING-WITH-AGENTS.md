# Research and delegate useful work

The basic workflow stays the same as the task changes. What changes is the information the agent needs, the tools it can use, and the evidence that would show the work is right.

## Choose something worth handing over

With the right tools and access, useful requests can end in a working file, a researched decision, or a small piece of software. Give it an outcome you can inspect.

| Task | Useful outcome | What needs checking |
|---|---|---|
| Spreadsheets | An expenses workbook with categories, totals, and a review list. | Every source row accounted for; calculations reconcile. |
| Writing | A proposal or presentation built from your notes for a named audience. | Claims, tone, and required points match your brief. |
| Job search | Verified openings and application drafts tied to your experience. | Roles are current; qualifications are not invented. |
| Creative work | Several directions developed from your references and constraints. | The choices reflect your taste and work in the intended format. |
| Small software | A calculator, tracker, game, or page you can actually use. | It opens, handles realistic inputs, and produces the intended result. |

## Give research a purpose and a search plan

“Research this business idea” can produce a polished report that never answers your actual decision. Start with what you need to decide: whether to interview potential customers, test a price, or spend a month building something.

Name the websites you care about, then have the AI ask whether they are priorities or the only permitted sources. Let it propose a search method before the main research: which questions to investigate, where to look, relevant languages and dates, and what would count as useful evidence. Approve that approach along with the output you want.

For a business idea, you might want competitor product pages for existing offers, customer discussions for recurring frustrations, and interviews you provide for people's actual workarounds. Each source answers a different question. A popular complaint does not establish that people will pay for your solution.

For Reddit or another discussion site, define a manageable set of threads and ask it to inspect accessible comments and replies. “Read all the comments” needs a boundary. Have it report what it covered, what it could not load, recurring views, and disagreement. If it counts a theme, it should say whether it counted comments, unique authors, or threads. Repeated or copied claims are not independent confirmation.

Discord and other logged-in communities need an accessible route. Provide specific channels, links, or an export you are allowed to share. If the agent cannot access them, it should say so. An inaccessible conversation is not evidence it has read.

Ask for a conclusion that distinguishes supported facts, reported experiences, and the agent's own inference. The important claims should link to the pages that support them, with dates where freshness matters. “No reliable evidence found” is a useful result when it is accurate. The [research prompt](PROMPTS.md#set-the-research-scope) puts this into one request.

## Give agents roles when the work benefits

For everyday work, begin with an available general-purpose model in the subscription you already use. For difficult planning or review, consider a stronger available reasoning option; for straightforward extraction or repetitive formatting, a lighter option may be enough. Choose according to the task, account limits, and observed results. A model name or maximum effort setting does not guarantee correctness.

A subagent is another agent given a bounded piece of the work. It can help when tasks are independent: one investigates competing products, another reads customer discussions, and a reviewer checks the conclusions against the sources. The lead combines their findings and resolves inconsistencies.

Give each worker a question, relevant context, a clear deliverable, and a boundary on what it may change. Give a reviewer the original brief and underlying evidence. Asking several agents whether an answer “looks good” is a weak check if they never inspect the sources or calculations. This adapts the separation of implementation and review in [Superpowers](https://github.com/obra/superpowers/blob/b36e0829c6d0140e93cfef2ca599b1b07d4a7797/skills/subagent-driven-development/SKILL.md), while keeping the approval rules from this guide.

Use the [Codex](CODEX-SETUP.md) or [Claude](CLAUDE-SETUP.md) setup section for the models and agent features your account actually exposes. Keep workers within one provider to start. Before adding parallel work, have the agent explain why it helps and how it fits your usage budget.

## Turn a useful task into recurring work

A Gmail morning briefing is a good candidate once a manual run gives you something you would actually read. Define the relevant inbox or labels, time window, what matters, where the result should appear, and the time zone. Ask it to distinguish messages needing a decision from background information, include links to the messages, and report incomplete access.

For example, your agreed format might be three sections: decisions needed, deadlines explicitly stated in messages, and useful updates. Ask for the message date beside anything time-sensitive. The agent should not invent deadlines or treat every unread message as urgent.

Have it produce one briefing, check its coverage against the agreed scope, and let you review the result. After approval, schedule future runs with the same rules. Keep actions such as replying, sending, archiving, or deleting outside a read-only briefing's scope unless you authorize them.

Before relying on the schedule, check where execution happens, which connections are available there, and what happens if a run fails. A reminder to read your email and an agent that reads it and produces a briefing are different tasks. Use a short test schedule, inspect the result and run time, and check notifications on the device where you want them. The product-specific setup sections distinguish local and cloud execution.

## Continue from your phone

For a computer-hosted task, the useful goal is to open the same task from your phone and send the next instruction to the computer. Use the supported connection flow for your product, then test it with a harmless practice file. Ask from the phone for a small edit and confirm on the computer that the file changed. Merely seeing chat history does not establish that the phone can control the local task.

Keep chat access and file access separate. A file saved on the computer does not automatically become an attachment you can open in the phone app. Ask the agent where it saved the result and what supported preview or sharing path is available. Some products can expose artifacts; that does not mean every local file is automatically available.

A computer-hosted agent needs its host available. Plugged in, awake, online, and connected are separate conditions. Follow the [host availability checklist](HOST-AVAILABILITY.md) and your product's setup section. Cloud work has different requirements; confirm it can reach the inputs before assuming it can finish the computer's task.

## Fix a mismatch without restarting everything

Describe what is wrong, what should replace it, and what must stay. “Keep the structure and sources. Make the recommendation reflect my budget, and ask before dropping a must-have” gives the agent a useful correction.

Have it update the relevant plan and recheck affected work. If it repeatedly fails, ask what evidence, access, or decision is missing. A saved note with the objective, agreed choices, progress, and unresolved issues makes resuming easier; it should not claim the task is complete merely because the chat is ending. This follows the continuity approach in [Planning with Files](https://github.com/OthmanAdi/planning-with-files/blob/51c1caa27f9fefe259e45a7cc92fa79ee8787cd7/skills/planning-with-files/SKILL.md).

## Try one useful task

Choose something small enough to inspect: a practice folder, a list of obligations, or a short research decision. Use [everyday mode](PROMPTS.md#everyday-mode), answer the questions that matter, and look at the finished result and its checks. Keep the parts that worked and make one specific correction if needed.

Save any preference you expect to reuse in your [working instructions](INSTRUCTIONS.md). You now have a starting point for the next task instead of rebuilding the whole conversation.
