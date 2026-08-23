## v46 — Reversible Review workflow
- Added Reviewed decisions section.
- Added one-click transport reversal.
- Added Reopen.
- Added Undo last review change.

## v46 — Work-location directories and live commute routing

- Added unlimited add/remove/save work locations for Kira.
- Added Kira shift-type → saved work-site mapping.
- Persisted Kira work-site directory and mappings with permanent setup.
- Chris home → work commute now uses saved work-site address when Live Address Routing is enabled.
- Kira work → home commute now uses the mapped saved work-site address when Live Address Routing is enabled.
- Fallback commute-minute fields remain in place when live routing cannot resolve an address.
- Moved both work-location directories to the Settings tab.

## v46 — Standardized LukaLab product branding

- Replaced prior mixed LukaLab maker signatures with: `A LukaLab AI Creative product | Pittsburgh, PA | All Rights Reserved`.
- Applied the standardized branding to the main application, mobile output, fridge/week output, print layout, and read-only exports.
- Added a consistent product/legal footer.

## v42 — Workflow simplification

- Reorganized AutoPilot into Plan / Calendars / Review / Outputs / Settings tabs.
- Made the boss-email card permanently visible in Outputs instead of burying it inside generated results.
- Simplified Review to show only items requiring a decision or missing location.
- Moved the full commitment table into a collapsed audit/transparency section.
- Added a Review-tab attention badge.
- Standardized user-visible event times on 12-hour AM/PM formatting.
- Removed the bulk team-calendar confirmation control from the normal Review workflow.

## v42 — Boss email editor usability

- Enlarged the boss-email text area for near-full-draft visibility without scrolling.
- Improved email text typography and padding.
- Added the standard Phil introduction to every generated two-week schedule email.

## v42 — 10-Minute Planning Review & Location Memory

- Added a day-by-day fast planning review.
- Added one-tap Requires transport / No transport controls.
- Added persistent transport-decision memory for recurring activities.
- Added persistent activity Location Memory.
- Current calendar-feed venues take priority and refresh saved venue memory.
- Missing future venues reuse saved locations automatically.
- Added inline venue correction in the planning review.
- Added one-click confirmation of all TeamSnap / TeamSnap ONE / GameChanger transport events.

## v42 — Transport Eligibility Intelligence

- Added Transport Required / Logistics Aware / Informational event classification.
- TeamSnap, TeamSnap ONE, and GameChanger remain transport-eligible by default.
- Primary Family events now need transport evidence before they can affect Chris's commute.
- Adult/work events such as Epic training no longer create transport assignments.
- Added per-event transport classification badge, rationale, and manual override.
- `generateCore()` now sends only Transport Required events into driver/departure optimization.

## v42 — Team calendar sync rebuild

- Removed periodic auto-refresh.
- Added one authoritative all-calendar refresh when AutoPilot opens.
- All saved feeds refresh again immediately before plan generation.
- Added provider-specific TeamSnap / TeamSnap ONE / GameChanger subscription handling and stale-feed query variants.
- Added calendar-subscription URL validation and clearer diagnostics.
- Added Calendar Gateway companion Worker for CORS-blocked subscriptions.
- Added LukaLab branding to mobile, Week at a Glance, fridge print, and read-only outputs.

## v42 — Guaranteed-visible LukaLab masthead

- Embedded the approved LukaLab skyline lockup as inline SVG in the AutoPilot header.
- Added a secondary skyline-only LukaLab maker mark.
- Removed the header's dependency on raster/base64 image rendering.
- Added explicit CSS visibility guarantees and reusable LukaLab assets.

## v42 — Typography and header density refinement

- Tightened the LukaLab logo crop and removed excess black canvas from the top of AutoPilot.
- Rebuilt the header as a compact horizontal product masthead.
- Replaced the prior Inter-first typography with an elegant Avenir Next / SF Pro / Helvetica Neue hierarchy.
- Improved text sizes, line-height, input readability, table typography, and black/gold contrast across the app.

## v42 — Incorporate approved LukaLab skyline logo

- Integrated the approved LukaLab AI Creative skyline logo directly into the AutoPilot header.
- Added the logo as a reusable repository asset.
- Preserved the Pittsburgh black-and-gold visual system while grounding the branding on the actual supplied logo.

## v42 — Pittsburgh skyline LukaLab branding refresh

- Added black-and-gold AutoPilot visual theme.
- Added a thin-line minimalist Pittsburgh skyline brand motif.
- Updated the AutoPilot header lockup and LukaLab AI Creative maker signature.
- Refreshed branding documentation.

## v42 — Auto-refresh, Child Identity Resolver, LukaLab branding

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
