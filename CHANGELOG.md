## v34 — Incorporate approved LukaLab skyline logo

- Integrated the approved LukaLab AI Creative skyline logo directly into the AutoPilot header.
- Added the logo as a reusable repository asset.
- Preserved the Pittsburgh black-and-gold visual system while grounding the branding on the actual supplied logo.

## v34 — Pittsburgh skyline LukaLab branding refresh

- Added black-and-gold AutoPilot visual theme.
- Added a thin-line minimalist Pittsburgh skyline brand motif.
- Updated the AutoPilot header lockup and LukaLab AI Creative maker signature.
- Refreshed branding documentation.

## v34 — Auto-refresh, Child Identity Resolver, LukaLab branding

- Added Primary Family Calendar periodic refresh and refresh-on-focus/resume.
- Added Child Identity Resolver and calendar ownership mapping.
- Added aliases and confidence labels.
- Added AutoPilot visual identity and LukaLab AI Creative maker signature.

# Changelog

All notable changes to the AutoPilot are summarized here.



## v31 — Stabilization & calendar correctness

- Added timezone-aware ICS parsing for UTC, numeric offsets, and `TZID` calendar events.
- Added recurring-event reconciliation for `EXDATE`, `RECURRENCE-ID`, and `STATUS:CANCELLED`.
- Added DAILY, WEEKLY, MONTHLY, and YEARLY recurrence support with common BYDAY/BYMONTHDAY/BYMONTH rules.
- Restored Smart De-duplication and Privacy Keyword Filter controls to the visible Calendar Hub.
- Added tolerant cross-source de-duplication with source-role priority.
- Manual Kira Schedule corrections now have protected precedence over calendar inference.
- Conflicting Primary Family Calendar shift signals now show a Verify state instead of silently using last-write behavior.
- Unknown child ownership now becomes `Unassigned / Verify` rather than silently defaulting to Middle.
- Enforced a single Primary Family Calendar.
- Added safe in-memory storage fallback when browser local storage is blocked.
- Planning output is invalidated when source inputs change; changing the start date regenerates an existing plan after schedule refresh.
- Calendar sources now show Fresh / Cached / Needs attention status.
- Simplified implementation-oriented labels and Calendar Hub wording.

## v31 — Kira Schedule planning-window fix

- Fixed Kira Schedule inference resetting when the two-week start date changes.
- Added a local, source-aware cache of Primary Family Calendar schedule detections.
- Replays cached detections immediately when the planning window changes.
- Refreshes only the Primary Family Calendar after a start-date change and re-runs inference for the new window.
- Primary Family Calendar recurrence expansion now follows the newly selected planning window after refresh.
- Team, school, and reference calendars remain excluded from Kira Schedule inference.

## v31 — Primary Family Calendar schedule detection

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
