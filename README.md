# AutoPilot — Family Logistics Planner

**AutoPilot** is a private, browser-based family operating system for coordinating work, school, sports, appointments, and transportation across a busy household.

It combines the family's **original calendar sources** with commute, work-location, driver, and transportation rules to create one actionable logistics plan.

- **AutoPilot Planner** — configuration and decision workspace.
- **AutoPilot Fridge View** — printable two-week household operating view.
- **AutoPilot Mobile Agenda** — iPhone-style Day / Week / Month views.

> **Brand promise:** *Your family calendar tells you what's happening. AutoPilot tells you how the day works.*

### AutoPilot source hierarchy

```text
Kira shared iOS calendar ─────────────── Primary Family Calendar ─┐
TeamSnap / TeamSnapOne / GameChanger ─ Team Schedule ────────────┤
School calendar feeds ───────────────── School Calendar ──────────┤
Manual planner entries ──────────────── Overrides ────────────────┤
                                                                  ├──> AutoPilot planning engine
Skylight Calendar ───────────────────── Parallel household display┘
```

Skylight remains a family-facing display, while AutoPilot reads the original calendar sources directly rather than depending on Skylight or a Google mirror as its system of record.

## What the app does

The planner answers the practical questions that ordinary calendars do not:

- Where should Chris work on each weekday?
- What time should he leave home, arrive onsite, and leave work?
- Who can realistically handle each drop-off and pickup after commute time is considered?
- Which days should be remote, onsite, flex-morning, or treated as transportation-risk days?
- How can the family see the same plan on a refrigerator printout and on an iPhone?

The application runs as a static HTML app. No application server is required for the core planner.

## Source-of-truth architecture

```text
Kira shared iOS calendar ───────────────┐
TeamSnap / TeamSnapOne calendars ──────┤
GameChanger calendars ─────────────────┤──> AutoPilot
School/public ICS calendars ───────────┤
Manual planner overrides ──────────────┘

Those same family/team calendars ─────────> Skylight household display
```

Calendar roles in v28:

| Role | Intended use | Priority |
| --- | --- | ---: |
| **Primary Family Calendar** | Kira's shared iOS family calendar | Highest |
| **Team Schedule** | TeamSnap, TeamSnapOne, GameChanger | High |
| **School Calendar** | School/academic feeds | Medium |
| **Reference / Other** | Supplemental calendars | Lower |
| **Manual Override** | Planner-specific exceptions and corrections | Explicit override |

The planner deliberately does **not** depend on a Skylight→Google mirror as its master feed. Each source is connected directly so historical events, team schedules, cancellations, and source ownership remain visible to the planner.

## Supported calendar inputs

The Calendar Hub is designed to accept:

- `webcal://` subscription URLs
- `webcals://` subscription URLs
- `https://` calendar/ICS URLs
- `http://` calendar URLs, normalized to HTTPS where appropriate
- Apple/iCloud Public Calendar links
- TeamSnap iCal subscriptions
- TeamSnapOne-compatible iCal subscriptions
- GameChanger schedule-sync links
- Google public ICS links
- generic `.ics` feeds
- one or many uploaded `.ics` files
- CSV imports
- ZIP files containing ICS calendars

See [Calendar Sources](docs/CALENDAR-SOURCES.md) and [Apple/iCloud Setup](docs/APPLE-ICLOUD.md).

## Calendar hygiene

Before imported events drive logistics, the app can:

- replace old rows when a connected source is refreshed;
- expand common daily and weekly ICS recurrence rules into the active planning window;
- de-duplicate equivalent events across source calendars;
- prefer the higher-priority source when duplicates collide;
- filter sensitive events locally by user-defined keywords;
- preserve saved events when a remote feed is temporarily unreachable.

See [Privacy & Data](docs/PRIVACY-AND-DATA.md).

## Outputs

### 1. Two-week logistics plan

The main decision-engine output includes work location, commute times, Kira's work/availability, family activities, driver assignments, backup requirements, and challenge indicators.

### 2. Refrigerator one-pager

Letter-landscape, two-week calendar with an iOS-inspired tile treatment: large date numerals, clean weekday hierarchy, activity details, commute information, challenge shading, and transport assignments.

### 3. iPhone mobile agenda

The Results view contains a dedicated mobile interface with:

- **Day** — agenda-style detailed daily logistics;
- **Week** — compact seven-day agenda;
- **Month** — iOS-style overview with event indicators.

Use **Download mobile family view** to create a standalone read-only HTML agenda that can be opened on either phone.

See [Mobile View](docs/MOBILE-VIEW.md).

## Quick start

1. Open `index.html` locally, or deploy this repository to GitHub Pages.
2. Enter permanent family/work assumptions.
3. In **Calendar Hub**, connect Kira's shared iOS calendar and assign **Primary Family Calendar**.
4. Add each TeamSnap, TeamSnapOne, and GameChanger calendar as **Team Schedule**.
5. Add school feeds if applicable.
6. Configure privacy keywords and duplicate handling.
7. Generate the two-week plan.
8. Review the desktop output, print the refrigerator calendar, or open/download the mobile agenda.

Full instructions: [Setup Guide](docs/SETUP.md).

## GitHub Pages deployment

This repository includes a GitHub Actions workflow that publishes the repository root to GitHub Pages.

1. Create a GitHub repository.
2. Upload/push this repository.
3. In **Settings → Pages**, set the source to **GitHub Actions**.
4. Push to `main`.
5. The `Deploy GitHub Pages` workflow publishes the site.

See [Deployment](docs/DEPLOYMENT.md).

## Apple/iCloud calendar note

Apple supports sharing an iCloud calendar as a read-only public calendar. On the calendar owner's iPhone: open **Calendar → Calendars → ⓘ → Public Calendar → Share Link**. Paste that URL into the planner's Primary Family Calendar field.

A public-calendar URL is effectively a bearer link: anyone with the URL can subscribe to that read-only calendar. Treat the URL as private even though Apple calls the calendar “Public.”

GitHub Pages cannot force Apple or another calendar host to allow cross-origin JavaScript requests. v28 therefore includes:

1. direct link normalization and retry behavior;
2. local `.ics` upload fallback;
3. an optional server-side calendar fetch proxy in [`proxy/`](proxy/).

## Local-first privacy model

The core planner has no backend. Planner settings, source URLs, filters, cycle data, and imported events are stored in the browser's local storage unless the user exports them.

Important implications:

- clearing browser/site data can erase local state;
- changing browsers/devices does not automatically transfer planner state;
- public-calendar URLs should not be committed into this Git repository;
- downloaded family agenda files may contain family schedule details;
- the optional proxy sees requested feed URLs in transit and should be deployed under an account you control.

Read [Privacy & Data](docs/PRIVACY-AND-DATA.md) before sharing the repo or mobile output.

## Repository structure

```text
.
├── index.html                         # production v28 application
├── README.md
├── CHANGELOG.md
├── SECURITY.md
├── PRIVACY.md
├── CONTRIBUTING.md
├── SUPPORT.md
├── LICENSE.md
├── .nojekyll
├── .gitignore
├── .github/
│   ├── workflows/
│   │   ├── pages.yml                  # GitHub Pages deployment
│   │   └── validate.yml               # lightweight repository validation
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   └── feature_request.yml
│   └── pull_request_template.md
├── docs/
│   ├── PRODUCT-OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── SETUP.md
│   ├── CALENDAR-SOURCES.md
│   ├── APPLE-ICLOUD.md
│   ├── TEAM-CALENDARS.md
│   ├── MOBILE-VIEW.md
│   ├── PRIVACY-AND-DATA.md
│   ├── BACKUP-RESTORE.md
│   ├── TROUBLESHOOTING.md
│   ├── DEPLOYMENT.md
│   ├── DATA-MODEL.md
│   ├── RELEASE-CHECKLIST.md
│   └── PROVIDER-REFERENCES.md
├── proxy/
│   ├── calendar-proxy-worker.js
│   └── README.md
└── scripts/
    └── validate.py
```

## Browser support

Designed primarily for current Safari/iOS and Chromium-based desktop browsers. Printing behavior should be validated after meaningful CSS changes. Remote calendar fetch success depends on the calendar provider's CORS behavior unless the optional proxy is configured.

## Development philosophy

- Preserve a single-file core app where practical.
- Prefer local-first operation and minimal infrastructure.
- Keep original calendar feeds authoritative.
- Never silently discard ambiguous events.
- Make transport feasibility depend on actual commute/travel assumptions.
- Treat private family calendar data as sensitive even when a provider calls a URL “public.”
- Keep the refrigerator and mobile outputs as alternate views of one generated plan, not separately maintained schedules.

## Documentation index

- [Product Overview](docs/PRODUCT-OVERVIEW.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Setup](docs/SETUP.md)
- [Calendar Sources](docs/CALENDAR-SOURCES.md)
- [Apple/iCloud](docs/APPLE-ICLOUD.md)
- [Team Calendars](docs/TEAM-CALENDARS.md)
- [Mobile View](docs/MOBILE-VIEW.md)
- [Data Model](docs/DATA-MODEL.md)
- [Privacy & Data](docs/PRIVACY-AND-DATA.md)
- [Backup & Restore](docs/BACKUP-RESTORE.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Release Checklist](docs/RELEASE-CHECKLIST.md)
- [Provider References](docs/PROVIDER-REFERENCES.md)

## License

This repository is packaged as **private / all rights reserved** by default. See [LICENSE.md](LICENSE.md). Replace the license deliberately if you later decide to open-source the project.

## Branding

- [AutoPilot branding guide](docs/BRANDING.md)
