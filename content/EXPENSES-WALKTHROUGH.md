# Turn a bank export into an expenses workbook

*Worked example with fictional transactions. The workbook described here is a proposed output, not a completed file.*

Suppose you have a messy bank export and want to know where your money went. You do not need to design a spreadsheet first. Tell the agent the result you want, give it access to an **exported copy** you choose, and make it resolve the decisions that affect the totals before it changes anything.

For example, you say: “Turn my August transactions into a personal-expenses workbook. I want monthly totals and a list of charges I should review.” The agent can inspect the copy to learn its columns and date format. It should then ask a focused batch of questions: Which currency should the report use? Do transfers between your own accounts count as spending? Should refunds reduce the original category? Do you want possible duplicates removed automatically or merely flagged? If you do not know what a choice means, it should explain the effect on the report and recommend an answer. It waits for your choice or your explicit delegation of that decision.

Once those answers are settled, the agent gives you a short recap. For this example, suppose you agreed to keep uncertain charges included, flag possible duplicates, exclude confirmed transfers between your accounts, and subtract matched refunds from spending. The proposed workbook has the original rows, a categorized ledger, a monthly summary, and a review list. Its checks will account for every row and reconcile the summary to the source amounts. You approve that plan before it transforms the data. The saved plan records these decisions and any unresolved facts.

For an important report, ask it to process a **small, varied sample** first. A sample of only straightforward grocery purchases proves very little. This fictional eight-row sample has the cases that often break expense summaries:

| ID | Description | Amount (USD) | Proposed treatment |
|---|---|---:|---|
| T01 | Groceries | −42.50 | Spending |
| T02 | Rent | −900.00 | Spending |
| T03 | Café | −5.00 | Spending; check for duplicate |
| T04 | Café | −5.00 | Spending; check for duplicate |
| T05 | Bookshop purchase | −25.00 | Spending |
| T06 | Bookshop partial refund | +12.50 | Reduce Bookshop spending if the match is confirmed |
| T07 | Transfer to own savings | −300.00 | Cash leaving this account; exclude from spending if it is your own transfer |
| T08 | SQ* Cedar | −18.00 | Spending, category needs review |

The agent should **keep both café rows** while their status is uncertain. They could be duplicated records or two real purchases. It should also keep the $18 charge in the spending total while labeling its category “Needs review”; hiding an unknown charge would make the report look cleaner and less accurate.

Here is a check the agent can show beside this sample. For the illustration, suppose you have confirmed that T06 is a matched refund and T07 is a transfer to your own account. Purchases total **$995.50** before the refund and **$983.00** afterward. Net movement across these eight rows is **−$1,283.00**: net spending of $983.00 plus the $300 transfer. There are eight source rows and eight accounted-for rows. On your actual task, the agent must calculate the checks from your file and confirm how it represents credits and debits.

Now you review the sample, especially the two judgments that arithmetic cannot settle: whether T03 and T04 are separate purchases, and what “SQ* Cedar” is. You can leave those facts unresolved and approve keeping the charges included and flagged. If a calculation fails, the agent fixes it and shows the corrected sample. If your categories or report format need to change, it asks. **Only after you approve the sample** should it process the rest of an important export. A trivial formatting request can skip this trial.

At the end, ask for the workbook, a short explanation of the totals, and a visible review list. Useful evidence is concrete: source row count matches processed row count; amounts reconcile; transfers and refunds follow the agreed rules; suspected duplicates and unknown merchants remain visible. If a check cannot be completed, the agent says which one and why. “I checked it” by itself tells you nothing.

## Copyable starting prompt

> I want a personal-expenses workbook from a transaction export I will point you to. Work from a copy and preserve my original file. First inspect the copy only to understand its columns, date range, amount signs, and any obvious data problems. Then ask me the questions you need to settle my preferences and the decisions that could change the totals or output. Ask up to 10 independent questions per round; ask dependent follow-ups after my answers. If I am unsure, explain the options, recommend one, and wait for my choice or explicit delegation. Do not guess how I want transfers, refunds, ambiguous merchants, or possible duplicates treated.
>
> Before transforming the export, show me a concise plan: intended workbook, categories and calculation rules, files you will use, how you will verify row coverage and totals, and what will be left for review. Wait for my approval. Treat this report as important: process a small, varied sample, including any refunds, transfers, ambiguous merchants, and possible duplicates you find. Check the sample against source rows and show me the result. Wait for my approval before processing the entire file. During execution, fix objective errors within the approved plan; ask me before changing my preferences, the output, scope, or cost. Keep unresolved facts visible under our agreed treatment. In the final result, show the workbook, reconciliation checks, and unresolved items. If you cannot access the file or complete a check, say so plainly.
