# Contributing

This repository is currently structured as a private family application, but changes should still follow a lightweight engineering discipline.

## Before changing code

1. Create a backup from the production planner.
2. Work on a branch.
3. Keep private calendar URLs and household data out of commits.
4. Update documentation for changed behavior.

## Validation

Run:

```bash
python scripts/validate.py
```

Then manually test the relevant planner workflow and mobile/fridge output.

## Pull requests

Describe:

- problem being solved;
- behavioral change;
- storage/data migration impact;
- calendar-provider impact;
- privacy impact;
- mobile/print impact;
- manual test cases performed.
