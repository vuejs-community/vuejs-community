---
name: create-pr
description: Create pull requests for vuejs-community following the repository's Conventional Commits style and PR body conventions. MUST be used immediately when the user says "create a PR", "open a PR", "make a PR", "submit a PR", "raise a PR for me", "send the changes up", "ready for review" or any similar phrasing — do not re-confirm intent, do not answer with PR theory, enter this skill's workflow directly. Also use it when drafting PR title/body, summarizing branch changes for a PR, or otherwise preparing PR content. Only skip it when the user is discussing PR concepts without requesting an action.
---

# Vue Community PR Creation Guide

## Goals

1. Generate the PR from all changes on the current branch relative to the baseline branch, not just the last commit.

2. There is currently no PR template under the repository's `.github/`. The PR body follows the fixed structure defined in this document (Background, Changes, Related Issues, Verification) — do not invent a more complex structure.

3. PR titles are always in English and follow the repository's Conventional Commits convention (consistent with `CONTRIBUTING.md`; commit messages are validated by the `verify-git-commit` hook, and PR titles keep the same style).

4. Before actually running `gh pr create`, you must first show the `base`, `title`, and `body` to the user for confirmation. Only create the PR after confirmation.

## Ground Rules

### 1. Trigger by intent — enter the workflow as soon as the phrasing matches

As soon as you can tell the user is requesting a PR, or preparing for one, use this skill.

When any of the following phrasings (or close variants) appear, **enter this skill's workflow directly** — do not ask "do you want to create a PR?", and do not reply with a PR concept explainer:

- "create a PR", "open a PR", "make a PR", "submit a PR", "raise a PR for me", "send the changes up", "ready for review"

Do not limit triggering to fixed wording. Even if the user's request is very short, informal, or incomplete (e.g. they only say "submit a PR" without naming a branch), enter this skill's workflow as long as they are not merely discussing PR concepts; handle missing information per rule 7 below ("don't fabricate when information is missing").

### 2. The PR body follows a fixed structure

The repository has no PR template; always use the following structure for the body:

```markdown
### Background

Why this change was made.

### Changes

What was changed and the key trade-offs.

### Related Issues

close #xxxx / None

### Verification

How the change was verified (lint, typecheck, which generation scripts were run, manual steps, etc.).
```

Do not invent extra sections and do not remove the main structure above. You may trim content by PR type: for pure data PRs with no UI changes, "Verification" only needs to state which generation scripts were run.

### 3. Titles are always English, following Conventional Commits

Determine the body language in this order:

1. The user's current request is mostly Chinese -> body in Chinese
2. The user's current request is mostly English -> body in English
3. The request is mixed but the conversation history is clearly Chinese-leaning -> body in Chinese
4. If you still can't tell, ask the user — don't guess

But regardless of the body language:

- The `PR title` must always be in English
- The `PR title` must follow the title conventions in this document (Conventional Commits)
- The `PR body` follows the user's language

### 4. Analyze the branch first, then write the PR

Before creating a PR, always look at:

- The current branch name
- The baseline branch
- The commit list of the current branch relative to the baseline branch
- The full diff of `base...HEAD`

Do not write the PR based only on uncommitted working-tree changes, and do not write it based only on the most recent commit.

### 5. Draft first, create the PR later

Whether or not the user says "just create the PR for me", always complete these steps first:

1. Produce a draft of `base`, `title`, and `body`
2. Clearly tell the user: this is the PR content about to be submitted
3. Ask the user to confirm whether to proceed or revise first
4. Only after the user explicitly confirms may you actually run `gh pr create`

If the user asks to change the title, type, target branch, etc. midway, update the draft first and confirm again.

### 6. Clear division of labor between title and body

- PR title: one English sentence summarizing the branch's most important change
- PR body: explains the background, the approach, related issues, and verification

The body is not a per-file ledger. Summarize "why it changed" and "what impact it has on developers/users after the change".

### 7. Don't fabricate when information is missing

If any of the following is missing and cannot be reliably inferred from the branch's changes:

- Baseline branch
- Related issue
- Nature of the change
- Tests or verification method

You may still produce a draft, keeping unverifiable parts as explicit to-be-confirmed items; if the user asks to create the PR immediately, you must still call out the missing items and wait for confirmation.

## Workflow

### 1. Check the repository and PR environment

Start by confirming:

```bash
git status --short
git branch --show-current
git remote -v
gh auth status
```

If `gh` is unavailable or not logged in, the current directory is not a git repository, or the current branch is not suitable for a PR, explain the problem first — do not fabricate results and continue.

### 2. Determine the baseline branch

Do not default to `master` blindly, but remember `master` is this repository's default branch and the final fallback. Determine it in this order:

1. The user explicitly specified a `base branch` -> use it directly
2. If the current branch has usable "origin clues", prefer inferring from real Git information:
   - `git branch -vv` to see tracking / upstream
   - `git reflog show <current-branch>` to see which branch it was checked out from
   - If needed, combine with `git merge-base HEAD <candidate-branch>` to compare fork points
3. If you can determine with reasonable confidence that the current branch was cut from a certain branch, prefer that branch as `base`
4. If it cannot be reliably inferred, fall back to `master`

Suggested commands:

```bash
git branch --show-current
git branch -vv
git reflog show --date=local $(git branch --show-current)
git remote show origin
```

Notes:

- tracking / upstream is only a clue, not guaranteed to be the "parent branch"
- `reflog` may yield nothing if it has been cleaned up
- If the inference is not confident enough, mark it explicitly as an "inferred value" in the draft

#### Extra reminder for feature branches

If the nature of the change is `feat` / a new feature, remind the user to confirm that the change intent matches the target branch (e.g. they meant to fix a single data entry but also changed site logic).

This reminder is only for confirming the workflow — do not change the base on your own.

### 3. Collect all changes on this branch

At minimum, review:

```bash
git log --oneline <base>..HEAD
git diff --stat <base>...HEAD
git diff <base>...HEAD
```

When needed, also check:

```bash
git diff --name-only <base>...HEAD
```

Your summary must cover every commit that will go into the PR from this branch, not just the last change.

### 4. Determine the PR type

Judge by the "primary purpose" — do not default to `fix` just because the diff contains logic changes.

Decision order:

1. Is it mainly documentation / explanatory text changes (`CONTRIBUTING.md`, README, comments)?
   - Yes: prefer `docs`
2. Is it mainly CI, workflow, scripts, data sync, generation pipeline changes?
   - Yes: prefer `ci` / `build` / `chore`
3. Is it mainly data entries added or corrected (items under `packages/data-*`)?
   - Yes: consider `feat(data-*)` / `fix(data-*)` / `chore(data-*)`
4. Is it mainly fixing a genuine defect in site UI or server APIs?
   - Yes: consider `fix`
5. Is it mainly adding new site capability?
   - Yes: consider `feat`
6. Is it mainly refactoring, typing, performance, or another specialized change?
   - Yes: use `refactor` / `perf`

Judge by "the user-visible primary result"; don't be distracted by a single file or a single commit.

Examples:

- Add/correct a Vite plugin data entry -> `feat(data-plugins)` / `fix(data-plugins)`
- Fix index.db generation logic -> `fix(db)`
- Adjust data type definitions -> `refactor(schema)`
- Homepage style or interaction issues -> `fix(ui)`
- Workflow / action adjustments -> `ci`
- Dependency upgrades -> `chore(deps)`

### 5. Summarize the PR's core information

At minimum, gather:

- Nature of the change: expressed as `type(scope)` in the title
- Related issue: an issue link or `close #xxxx` / `fix #xxxx`
- Background: the problem context and the approach taken
- Verification: how the change was confirmed to work

### 6. Check local verification

Before producing the draft, confirm that the following pass locally:

```bash
pnpm lint
pnpm typecheck
```

For data changes, also confirm `pnpm generate:db` was run and the index.db under `server/assets` was updated.

Also note the repository's Git hooks:

- The **pre-commit** `lint-staged` hook runs `eslint --fix` on staged files automatically
- The **commit-msg** `verify-git-commit` hook validates commit message format

If the branch contains historical commits that don't follow Conventional Commits and they can't be rewritten one by one, the PR title should still follow the convention — don't follow the style of bad commits.

### 7. Generate the PR title

Title requirements:

- Generate per "Writing Requirements -> Title" below
- Cover the branch's overall main goal
- Do not copy a single commit message
- `type` must match the determination from step 4

### 8. Produce the PR body draft in the fixed structure

When filling it in:

- Keep the four sections "Background / Changes / Related Issues / Verification"
- Be as specific as possible, but don't write a long essay
- If UI changes are involved, remind the user that screenshots or GIFs can be added
- If some information is not yet confirmed, flag it explicitly — don't pretend certainty

### 9. Show the draft to the user first

Your output must include at least:

- `Base branch`
- `PR title`
- `PR body`
- Points the user needs to supply or confirm

Explicitly ask the user whether to:

- Create the PR directly
- Revise first, then create

Do not run `gh pr create` without explicit confirmation.

### 10. Create the PR

Only run this after the user explicitly confirms.

Before executing, re-check:

```bash
git branch -vv
git remote -v
gh repo view --json nameWithOwner
```

Requirements:

1. Confirm the current branch's tracking remote and remote branch are correct
2. Confirm the PR's target repository is `vuejs-community/vuejs-community` — don't rely on `gh`'s default inference
3. If the tracking remote is missing, ambiguous, or not the expected fork, confirm with the user first — don't push by default
4. Only push the current branch when the push target remote is unambiguous
5. Run `gh pr create` with the confirmed title and body

If a push is needed, prefer an explicit remote and branch name, e.g.:

```bash
git push -u <remote> HEAD
```

Recommended form:

```bash
gh pr create --repo vuejs-community/vuejs-community --base <base> --title "<title>" --body "$(cat <<'EOF'
<body>
EOF
)"
```

After the PR is created, return the PR link and remind the user:

- CI runs `pnpm lint` automatically; if the autofix bot finds fixable issues it commits them to the PR directly, so there is no need to fix lint errors manually over and over
- Data PRs may conflict with the daily data sync workflow (automated commits from github-actions[bot]); rebase before merging

## Writing Requirements

### Title

- Must be in English
- Decide `type` first, then whether a `scope` is needed
- Prefer `type: subject` or `type(scope): subject`
- Prefer outcomes over process
- Avoid empty phrases like `update`, `fix issues`, `misc changes`
- If the branch contains many small unrelated changes, distill a higher-level summary

Common `type` reference (consistent with the commit convention in `CONTRIBUTING.md`):

- `feat`: new capability
- `fix`: bug fix
- `docs`: documentation or explanations
- `style`: formatting
- `refactor`: refactoring
- `perf`: performance
- `test`: tests
- `build`: build or generation pipeline
- `ci`: CI or workflow
- `chore`: maintenance
- `revert`: revert

`scope` rules:

- Add it only when changes are concentrated in a single package or module, e.g. `feat(data-nuxt): ...`
- Common `scope`s: `db`, `data-nuxt`, `data-plugins`, `data-component`, `data-hooks`, `data-ui`, `schema`, `shared`, `ui`, `deps`
- If there is no clear focus, don't force a `scope`
- Don't mechanically stuff directory names into `scope`

### Background

- State the problem being solved first
- Then the approach taken
- If site interactions, data display, or generated artifacts change, call out the externally visible difference

### Changes

- Summarize as items, not a per-file ledger
- For data PRs, note the affected entries (which items were added/corrected)

### Verification

- State that `pnpm lint` and `pnpm typecheck` were run
- For data changes, state whether `pnpm generate:db` was run
- For UI changes, attach screenshots or GIFs

## Reference

For more type determination guidance, baseline branch tips, confirmation phrasing, and title examples, see `references/notes-and-examples.md`.
