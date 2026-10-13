# Get useful work out of AI

*The five-minute version*

Start with something you actually want finished: understand your spending, assess a business idea, improve a job application, or organize a folder you keep avoiding. Give the AI a useful outcome to work toward.

With suitable tools and access, an agent can inspect files, research, make changes, run calculations, and check its work. What your particular setup can do depends on the tools and information it can reach. Ask it to check access early and explain any missing piece.

Your main job is to make your intentions and preferences clear. The AI should help you do that by asking questions, explaining choices, and investigating facts. It should also do the work and provide evidence that the result holds up.

## Start with the outcome

“Make this spreadsheet better” leaves plenty of room for interpretation. “Help me understand my monthly spending and find recurring charges” gives the AI a direction. You can start there even if you have no idea what the finished workbook should contain.

Add whatever you already know: who will use the result, where the information is, what bothers you about the current version, and anything that must stay unchanged. An existing example or reference is useful if you have one. You can also explain your preferences through questions.

Clear instructions help. They cannot prevent every reasoning mistake or missing fact, which is why checking belongs in the workflow too.

## Make the AI interview you

For substantial work, ask it to clarify the task before making changes. It should inspect the available information and ask about choices only you can settle. If the file already contains the date range, it can read that. Whether you want work expenses mixed with personal spending is your decision.

Have it group independent questions together, up to ten per round. Follow-up questions should reflect your answers. If you don't understand a choice, ask for a plain explanation, the tradeoffs, and a recommendation. “I don't know” should lead to help deciding; it isn't permission to silently choose for you.

The interview ends when the decisions that matter are settled and you confirm the recap. Facts that still need investigation should be named, with a way to investigate them. This adapts the [grilling workflow](https://github.com/mattpocock/skills/blob/85f83d3fde1d3a90d5c9a657f6998c79a6c37308/skills/productivity/grilling/SKILL.md).

## Approve a plan you can understand

Before substantial work begins, the AI should briefly explain the intended result, your key preferences, what it will change, and how it will check success. A longer task can have a saved plan behind that recap. Ask it to wait for your go-ahead.

“I'll check the spreadsheet” is vague. “I'll account for every source row and reconcile the totals after applying your agreed rules” gives you something assessable. For research, checks might include opening the cited sources and separating supported facts from assumptions.

Small, clear tasks can go straight through. Rephrasing one sentence usually needs neither a plan file nor an interview. Planning should grow with the importance and ambiguity of the task. Our approval rule is adapted from [Superpowers](https://github.com/obra/superpowers/blob/5bf4e78011075bcfc0dc295f0724994cd123ee71/skills/brainstorming/SKILL.md), with this simple-task exception.

## Review a small trial when the work matters

For important work, let the AI complete a small, representative part first. Have it run the checks and show you the sample before expanding. Include a difficult case in the sample: a refund in an expenses sheet, or an awkward file in an organization task.

Use that checkpoint to judge whether the approach matches what you meant. The AI can check a calculation; you decide whether the categories are useful. Once you approve, it can apply the approach more widely. Unimportant tasks can skip the sample.

During execution, it should fix objective errors within the agreed plan. If a new choice would change your preferences, scope, output, or cost, it should ask. This draws on [GSD's distinction between repairs and decisions requiring input](https://github.com/open-gsd/gsd-core/blob/238bee7b0357b68aa253df20850ffe4d4f407ed4/gsd-core/workflows/execute-plan.md).

## Look for evidence, then refine specifically

At completion, ask for the result, the checks actually performed, and anything still unresolved. A second agent can help review important work when available, provided it inspects the original brief and evidence. Agreement between two agents isn't a substitute for those checks.

If something is wrong, identify the mismatch and preserve what worked: “Keep the layout and totals. Separate business travel from personal travel, and ask me about transactions you can't distinguish.” The AI should update the relevant decisions and recheck the affected work.

For ongoing tasks, save the decisions and current progress somewhere the agent can read next time. [Planning with Files](https://github.com/OthmanAdi/planning-with-files/blob/51c1caa27f9fefe259e45a7cc92fa79ee8787cd7/skills/planning-with-files/SKILL.md) provides one approach. You can begin with a short task note. Choose one useful task, get the questioning and approval process working, and build from there.
