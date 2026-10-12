# AutoPilot — Family Planning

**Current packaged application:** v56.10 (Workflow Feedback)

AutoPilot is a single-file family logistics, dinner, and grocery planning application. The deployed application is [`index.html`](index.html).

**Live site:** https://luka731chris.github.io/AutoPilot/

## Deploy using your existing workflow

1. Download and unzip this release package.
2. In your existing GitHub AutoPilot repository, replace the root `index.html` with the packaged `index.html`. Keep your existing GitHub Pages configuration unchanged.
3. Optionally copy the updated Markdown documentation and `tests` folder. They are not required by the hosted application.
4. Commit the changes and reload your existing Pages URL. Confirm the page title and version identifier show **v56.10**.

> **Before replacing a working app:** export a JSON backup using the in-app Backup & Restore control; keep it private and keep a copy of the prior working `index.html` outside the Pages publishing directory.

## Main workflows

- **Logistics:** import and refresh family calendars; review activities and transport decisions; save and finalize separately.
- **Dinner:** choose, manually override, and save meals and recipes.
- **Groceries:** prepare shopping outputs based on meal selections.
- **Publish:** produce family-facing schedules, including phone/fridge/NONZERO integrations where configured.
- **Backup & Restore:** export and restore app data as JSON.

Modules are intended to support independent work sessions. Functional behavior involving third-party calendar feeds and NONZERO publishing remains environment-dependent.

## Release assurance

Run `node tests/check-release.cjs` before committing. This checks embedded-script JavaScript syntax, duplicate static IDs, and the configured release title. **These checks do not certify end-to-end functionality.** See [QA status](docs/QA-STATUS.md).

## Privacy

Do not commit JSON backups, private calendar subscription URLs, household schedules, API tokens, or credentials. GitHub Pages hosts a publicly accessible website even if the repository is private. See [privacy and recovery](docs/DATA-AND-RECOVERY.md).
