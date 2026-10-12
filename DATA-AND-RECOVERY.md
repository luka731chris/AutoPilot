# Data, backups, and recovery

## Before upgrading
1. Open the currently working AutoPilot in the browser/profile where family data is stored.
2. Use **Backup & Restore → Export Backup** to download the JSON backup.
3. Store that file outside the GitHub repository and protect it as private household data.
4. Keep a copy of the current production HTML before replacing `index.html`.
5. Upgrade and verify your saved calendar activities, driver decisions, meal recipes, and module status before deleting any backup.

## Restore
Use **Backup & Restore → Import Backup**, preview the backup contents, and confirm restoration. Recheck the active planning date and several activities and meals afterward. Old backup formats may not fully cover newer fields.

## Browser storage
AutoPilot relies on browser storage for saved plans and settings. Browser profiles, private browsing, origin changes, or storage clearing may affect what the app can see. The same GitHub Pages origin can share local storage between paths; keep private data out of the repository.

## GitHub safety
Never commit backup JSON, private ICS URLs, family calendar exports, API keys, or screenshots containing personal appointments. Do not assume a private GitHub repository makes a Pages website private.
