# Contribution Guide

This document defines how the team works together in this repository. Read this before making any changes.

## Branching Rules

- `main` is the stable/final branch. **Never push directly to it.**
- `develop` is the integration branch. All completed features are merged here first, after review.
- Each member works only on their assigned branch (`member-2` through `member-6`).
- Pull Requests go from a member branch → `develop`. Never target `main` for regular feature work.

## Before You Start Working

```bash
git checkout develop
git pull origin develop
git checkout member-X
git merge develop
```

Always merge the latest `develop` into your branch before starting new work, so you're not building on an outdated base.

## While You Work

- Only edit files listed under your ownership in the team guide.
- If you need to touch a file owned by someone else, or a "requires coordination" file, message them first.
- Do not rename files, folders, API fields, or components used by another member without discussion.
- Do not install new dependencies without informing the integration owner (Member 1).
- Do not commit `node_modules`, real `.env` files, API keys, or any credentials.

## Committing

Use clear, conventional commit messages:

## Pushing and Opening a PR

```bash
git add .
git commit -m "feat: describe your change"
git push origin member-X
```

Then on GitHub:
1. Open a Pull Request.
2. Base branch = `develop`, compare branch = your member branch.
3. Give it a clear title and description: what changed, which files, how to test it.
4. Mention any cross-team dependencies (e.g. "this expects a `category` field from the product API").
5. Wait for review/testing before considering the feature complete.

## Definition of Done

A feature is only "done" when:
- It's actually functional, not a placeholder.
- Loading, success, and error states are handled where relevant.
- API calls go through the agreed service/API layer.
- No secrets or unnecessary generated files are committed.
- You've tested it locally.
- The branch is pushed and a PR to `develop` is open.
- Any breaking change or dependency is clearly communicated to the team.

## Questions or Conflicts

If you're unsure whether a file is yours to edit, check the ownership table in the team guide first. If a change crosses module boundaries, coordinate before touching it — don't guess.