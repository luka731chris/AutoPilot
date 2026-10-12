# Release validation status — v56.10

## Checks performed for this package
- Verified the distributable is a self-contained HTML file named `index.html`.
- Verified expected document title identifies v56.10.
- Checked embedded script syntax and static HTML ID uniqueness using `tests/check-release.cjs`.
- Confirmed release documentation points to the unchanged GitHub Pages URL.

## Not certified in this packaging pass
- Live 5-day and 10-day planning with actual family calendar feeds
- Edit Day interaction, keyboard tab navigation, multi-select event decisions, and saved-state reopening
- Independent logistics/dinner/grocery finalization and publish behavior
- Recipe discovery/import, manual overrides, and grocery list accuracy
- Backup/export → clear state → import → verify data round trip
- Word/Excel export rendering and NONZERO cloud publish
- Cross-device, mobile, and browser-specific performance

These require repeatable browser tests with representative fixtures and, for external systems, authenticated integration testing. **Do not interpret a passing static test as production certification.**

## Manual acceptance checklist
- [ ] Application loads at existing GitHub Pages URL with v56.10 in visible release identification.
- [ ] Existing logistics plan appears and review changes persist on reload.
- [ ] Edit Day stays open while combining No Ride Needed, Not Going, and Hide from Wall.
- [ ] Save/Finalize independently for Logistics and Dinner, then revisit each.
- [ ] Manually override meals, find saved recipes, and generate accurate grocery items.
- [ ] Fridge, phone and NONZERO show intended activities and dinners, excluding hidden/not-going activities.
- [ ] Export and restore JSON backup in a controlled browser profile.
