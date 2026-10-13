# Product setup: sources and limits

These notes accompany the [Codex setup](CODEX-SETUP.md) and [Claude setup](CLAUDE-SETUP.md) chapters. They list the public evidence used for those chapters and explain its limits. The original research dates remain below; these are not fresh product tests.

## Codex

Checked October 2, 2026 in Korea (October 1 UTC). The chapter used public repository code and interface text from an installed desktop build. Installation, phone pairing, scheduled execution, and account connections were not tested.

| Public source | What it supports |
| --- | --- |
| [Codex repository README](https://github.com/openai/codex/blob/dd90f160ed9bf91320c417335ddff848b6a23dd0/README.md) | The desktop app entry point and sign-in context. |
| [Instruction discovery](https://github.com/openai/codex/blob/dd90f160ed9bf91320c417335ddff848b6a23dd0/codex-rs/core/src/agents_md.rs) | How project instruction files are discovered in the inspected implementation. |
| [Model metadata](https://github.com/openai/codex/blob/dd90f160ed9bf91320c417335ddff848b6a23dd0/codex-rs/app-server/src/models.rs) | The model catalog and supported reasoning options are filtered by the environment. |
| [Multiple-agent implementation](https://github.com/openai/codex/blob/dd90f160ed9bf91320c417335ddff848b6a23dd0/codex-rs/core/src/tools/handlers/multi_agents_v2/spawn.rs) | Agent spawning exists in the inspected code; this does not establish access in every account. |
| [Dated Windows remote-control report](https://github.com/openai/codex/issues/47555) | User reports of successful phone execution and setup failures. Reports do not establish behavior on your device. |

The chapter's connection, keep-awake, and scheduled-task menu labels were observed in an installed desktop build. They may differ in your version or workspace. There is no public link here that independently proves those exact menus or successful execution on every device. Check the controls your account exposes and run the small practice tests in the chapter.

## Claude

Checked October 1, 2026. The exact current Mac and Windows menus were not independently verified. No new installation, phone pairing, scheduled run, or account connection was performed for this guide.

| Public source | What it supports |
| --- | --- |
| [Claude download page](https://claude.com/download) | The app download entry point. |
| [Desktop integration release notes](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21285) | Desktop integration and desktop-hosted remote sessions in the cited release. |
| [SDK configuration](https://github.com/anthropics/claude-agent-sdk-python/blob/db750b20a88ae9645b1674d95193a88c89a265f9/src/claude_agent_sdk/types.py#L2297) | The hosting configuration affects which instruction files are loaded. |
| [Example agent definition](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/plugins/feature-dev/agents/code-explorer.md) | A concrete definition with role, tools, and model. |
| [Session-loop release notes](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21110) | Loop expiry and resume behavior. |
| [Cloud-routine connection notes](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21251) | A connection configured only on a local computer is not automatically available in a cloud routine. |
| [Remote file-feature notes](https://github.com/anthropics/claude-code/blob/6160717d8994f236ab381cf534fc1cde5347c12f/CHANGELOG.md#21281) | File features exist, while the actual preview or attachment route still needs testing. |
| [Happy community project](https://github.com/slopus/happy/blob/4cf54d18488cba4787cc251cc37010f31125af29/packages/happy-cli/README.md) | An optional wrapper and pairing alternative. It is additional setup, not a guaranteed continuation of a desktop conversation. |

## What to verify on your own setup

Repository code and release notes establish implementation context. They do not prove that your subscription, app build, workspace, computer, or phone has a feature. Use the setup chapters to check actual folder access, instruction loading, conversation continuity, artifact access, and one completed scheduled result before depending on them.
