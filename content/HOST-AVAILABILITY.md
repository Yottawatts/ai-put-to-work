# Keep your computer available for local work

Use this for work that runs on your home computer. A cloud task has its own execution environment; keeping your laptop awake does not give that task access to local files.

For the first setup, leave the laptop plugged in, online, and with its lid open. The display can turn off while the system remains awake. Closing the lid is a separate behavior and needs a separately verified setup.

## Choose the simplest supported setting

Start with your agent app's built-in keep-awake setting if it has one. The [Codex setup](CODEX-SETUP.md) describes the setting observed in the inspected app build and its conditions. For another app, inspect its current controls rather than assuming it has the same option.

On a Mac, the built-in `caffeinate` utility can prevent idle sleep for a duration or while a chosen process runs. It does not establish that closing the lid will keep the task running. You can ask an agent to set up a temporary, process-bound session instead of changing system behavior indefinitely. See [Apple's implementation](https://github.com/apple-oss-distributions/PowerManagement/blob/main/caffeinate/caffeinate.c).

On Windows, inspect the plugged-in system sleep setting. If you already use PowerToys, its [Awake utility](https://github.com/microsoft/PowerToys/blob/main/doc/dsc/modules/Awake.md) also has timed and indefinite modes, with separate display behavior. Test the result with the screen locked: the [reviewed implementation snapshot](https://github.com/microsoft/PowerToys/blob/main/src/modules/awake/Awake/Core/Manager.cs) explicitly handles lock state, so a setting's name alone is not an end-to-end check of your device.

## Ask for a setup you can verify

> Help me keep this computer available for local agent work while plugged in at home. Inspect the current settings and recommend a setup that lets the display turn off while preventing idle system sleep. Keep the lock screen and normal battery behavior. Explain how to restore normal sleep, and wait for approval before changing settings. Afterward, verify the configuration and help me test a short task while the screen is locked. I'll keep the lid open.

For scheduled local work, confirm the host and agent are still available at the scheduled time. For phone access, test a real follow-up instruction after the computer has been idle. A successful configuration change and a successful remote or scheduled run are separate checks.

This guide has not changed your power settings or tested your devices.
