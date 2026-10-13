# Set up Claude for work on your computer

Checked October 1, 2026. Start with your existing Claude account. A roughly $20 subscription or an employer login does not establish which agent features, models, or connectors you can use. Check the options actually available before buying anything extra.

Claude Code can work with files through the desktop app. You do not need to learn programming to give it a file task. Its name describes its original audience; your first exercise can be organizing copies of documents.

## Start with one local folder

1. Get the desktop app from [Claude's download page](https://claude.com/download) if needed. Sign in with your existing account. Look for its Code workspace. Check the app version and your account's available features if it is missing. The exact current Mac and Windows menus were not independently verified for this guide.
2. Start a session that runs on this computer and select a small practice folder. Choose **local** if the app distinguishes local and cloud environments. A cloud session cannot be assumed to see your Downloads folder. If the app offers only GitHub repositories, check its version, account access and environment selection; do not create a repository just to make this exercise work.
3. Ask it to prove that it can read the folder before asking it to change anything:

> Tell me the folder you are working in. List five filenames from it without changing anything. Report any access limitation.

4. Compare that list with Finder or File Explorer. Then use the [Downloads exercise](PRACTICAL-EXAMPLES.md) with copied files and a record of what moved.

The [release history](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21285) confirms desktop integration; it does not settle every account's interface. If you already use the terminal, the optional shortcut `claude --desktop` opens the desktop app from the current directory in a supported recent version.

## Save a few standing instructions

Use the [instruction-file merge prompt](INSTRUCTIONS.md#let-the-ai-update-your-instruction-file). Ask Claude to merge the preferences into the selected folder's `CLAUDE.md`, or create it if absent. Review its proposed diff before saving. Keep it short: how you want substantial tasks clarified, when approval is needed, how originals should be preserved, and how results should be checked. The individual task's preferences belong in its plan.

Start a fresh session in that folder and ask:

> Which instruction files have you loaded? Give their paths and summarize the rules you will follow. If you cannot confirm loading, say so, then read this folder's CLAUDE.md explicitly.

Claude supports project instruction files, but a wrapper or app host can affect what loads. The [SDK configuration](https://github.com/anthropics/claude-agent-sdk-python/blob/db750b20a88ae9645b1674d95193a88c89a265f9/src/claude_agent_sdk/types.py#L2297) makes this dependency explicit. Do not assume a file applies to every ordinary Claude chat or every unrelated folder.

## Choose roles before models

Start with one agent. For substantial independent work, try:

> Give one worker the bounded research task and another the output check. Tell each the brief, allowed sources, boundaries and required evidence. Keep file ownership separate. Integrate their findings and report disagreements.

Use the strongest model you can access for difficult decisions or review when needed, and a lighter available model for clear extraction or formatting. Opus and Sonnet are configurable examples, not a universal ranking. Check the actual model used and your usage allowance; several workers consume more of it. A reviewer must inspect sources or outputs, not merely agree with another model. Real [agent definitions](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/plugins/feature-dev/agents/code-explorer.md) specify a role, tools and model. Ask Claude to create or manage a reusable definition only when useful.

## Test a Gmail briefing before scheduling it

Use your app's available Gmail connection, with the account and scope you intend. Employer policy may restrict it. Ask for one manual briefing: your time zone, reporting window, included labels, urgency criteria, message links, incomplete coverage and a prohibition on sending or changing mail. Confirm that it actually retrieved the intended messages.

Then ask:

> Show the exact recurring prompt, time zone, execution location, Gmail connection, output location and failure behavior. Explain what must remain running. Run one test for review before enabling recurrence.

There are three different arrangements:

| Arrangement | What to establish |
| --- | --- |
| A session loop | The session's process must be available. Check expiry and [resume behavior](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21110); it is not an always-on service. |
| A local desktop schedule | Confirm app-open, awake, network and sign-in requirements, including what happens after a missed run. |
| A hosted routine | Confirm cloud execution and attach its Gmail connector there. Local files and locally configured tools are not automatically available. |

[A tool connected only on your computer cannot simply be attached to a cloud routine](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21251); connect Gmail in the routine's own environment. Do not substitute a loop for a dependable daily job without explaining its limits. Keep local work plugged in and awake as required, and test lid closure separately; plugging in alone does not prove availability. Inspect the first scheduled result for fresh coverage and successful delivery.

## Continue the same task from your phone

Try native **Remote Control** first where your account offers it; [release notes confirm desktop-hosted sessions](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21285). Enable it for the computer session, use its connection link or pairing route, and open that session on your phone. Send: “Summarize our agreed plan and the latest completed check.” Confirm that it is the same conversation before giving new work. Keep the host process, computer and network available.

Starting a cloud task from your phone is another execution environment. [Happy](https://github.com/slopus/happy/blob/4cf54d18488cba4787cc251cc37010f31125af29/packages/happy-cli/README.md) is an optional community alternative requiring a local wrapper and pairing; it adds setup and does not automatically adopt every desktop conversation.

Finally, test the output itself. Ask Claude to present the finished file through an available attachment or artifact route and open it on your phone. [Remote chat supports file features](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21281), but saving a file on your computer does not automatically make it a phone attachment. If only a local path appears, request a readable excerpt for now and open the full file on the computer.

Source details and verification gaps: [Claude setup evidence](SETUP-SOURCES.md#claude).
