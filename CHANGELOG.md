# Changelog

All notable changes to the AutoPilot are summarized here.


## v29 — Primary Family Calendar schedule detection

- Renamed the in-app section to **Kira Schedule**.
- Kira Schedule is now auto-detected exclusively from the **Primary Family Calendar**.
- Team, school, and reference feeds cannot modify Kira Schedule.
- Removed Skylight from the AutoPilot ingestion architecture and all current setup guidance.
- Updated product documentation, source diagrams, privacy/data-model language, and troubleshooting guidance.

## v28 — Source architecture + mobile agenda

- Established explicit calendar-source roles.
- Made Kira's iOS family calendar the intended **Primary Family Calendar**.
- Added Team Schedule / School / Reference source roles.
- Updated duplicate preference to use source priority.
- Refreshes reachable saved web calendars before plan generation.
- Preserves saved events when a feed cannot be refreshed.
- Added dedicated iOS-inspired mobile Day / Week / Month output.
- Added downloadable standalone mobile family agenda.
- Preserved refrigerator calendar as a separate print-first output.

## v27 — Apple public-calendar reliability

- Hardened Apple/iCloud copied Share Link parsing and normalization.
- Added Apple-specific fallback flow instead of dead-end errors.
- Added optional calendar fetch proxy support.

## v26 — Calendar hygiene

- Added smart de-duplication settings.
- Added source preference for duplicate resolution.
- Added privacy keyword filtering.

## v25 — Calendar Hub

- Added Primary iPhone calendar connection.
- Added bulk team-calendar links.
- Added multi-ICS upload.
- Added source-aware refresh behavior.
- Added recurring-event expansion for common daily/weekly ICS rules.

## v24 — Refrigerator redesign

- Reworked fridge one-pager toward an iOS Calendar-inspired tile view.
- Increased date prominence and refined weekday/month typography.

## v23 and earlier

- Established two-week work/transport optimizer.
- Added persistent settings and rolling-cycle storage.
- Added Kira commute-aware pickup logic.
- Added work-location overrides, backup/export, fridge output, and family plan downloads.

- **AutoPilot branding:** documentation now uses **AutoPilot — Family Logistics Planner** as the public-facing product identity.
