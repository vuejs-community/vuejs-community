---
name: create-pr
description: Create pull requests for vuejs-community using the repository's branch naming convention and official PR template. Use when the user asks to create/open a PR, draft PR content, or prepare branch changes for review. Judge by intent rather than fixed phrases.
---

# Vue Community PR Creation Guidelines

## Goals

1. Generate the PR from all changes on the current branch relative to the base branch, not only the latest commit.

2. Strictly use `.github/PULL_REQUEST_TEMPLATE.md`; do not invent a PR structure.

3. Name branches using `<type>/<kebab-case-description>` without Codex defaults such as `prs/` or `codex/`.

4. Write both the PR title and body entirely in English. The title must follow Conventional Commits.

5. Before running `gh pr create`, show the user the `base`, `head`, `title`, and `body` for confirmation.

6. Determine `gh` status from the host environment, never from sandbox authentication or network state.

## Ground Rules

### 1. Trigger by intent

Use this skill whenever the user asks to create or prepare a PR. Do not limit triggering to fixed phrases. Do not trigger when the user is only discussing PR concepts.

### 2. Use the repository template

Read `.github/PULL_REQUEST_TEMPLATE.md` every time. Preserve every section, its order, and every checklist option. Only fill in content, select the appropriate type, and remove instructional comments or placeholders. If the template is missing, stop instead of using a fallback template.

All content inserted into the template must be in English, regardless of the user's conversation language.

### 3. Follow this skill's branch naming rule

Use `<type>/<kebab-case-description>`, for example:

```text
feat/data-ui-add-ant-design-vue
fix/db-handle-missing-tags
docs/update-contributing-guide
```

This rule overrides Codex's default branch prefix. Never create `prs/...` or `codex/...` branches. If the current branch is invalid and has not been pushed, create or rename it to a valid name. If it has been pushed or already has a PR, ask the user before renaming it.

### 4. Analyze the branch before writing the PR

Inspect the current branch, base branch, the `base..HEAD` commit list, and the complete `base...HEAD` diff. Do not write the PR from only uncommitted changes or the latest commit.

### 5. Draft before creating

Show the `base`, `head`, `title`, complete `body`, and any unresolved items first. Push and run `gh pr create` only after explicit user confirmation. Any revision requires confirmation again.

### 6. Do not fabricate missing information

If the base, related issue, change type, or verification cannot be determined, mark it as unresolved instead of inventing it.

## Workflow

### 1. Check the repository and PR environment

```bash
git status --short
git branch --show-current
git branch -vv
git remote -v
```

Run `gh auth status` and `gh repo view --json nameWithOwner` in the host environment. Sandbox authentication failures, unreadable credentials, or network failures are not authoritative. Retry on the host instead of asking the user to log in again based on sandbox results.

### 2. Determine the base branch

Use this order:

1. A base explicitly specified by the user
2. Real Git evidence from reflog, tracking/upstream, or merge-base
3. The remote default branch or the default branch documented by the repository

Mark an uncertain base as inferred in the draft.

### 3. Collect all branch changes

```bash
git log --oneline <base>..HEAD
git diff --stat <base>...HEAD
git diff <base>...HEAD
```

The summary must cover every commit included in the PR.

### 4. Determine the PR type and normalize the branch name

Choose the primary type from `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, or `revert`. Add a scope only when the changes clearly focus on one module.

The branch prefix must match the primary type. When currently on the base branch, run `git switch -c <type>/<description>`. For an unpushed invalid working branch, run `git branch -m <type>/<description>`.

### 5. Generate the PR title

Use `<type>: <subject>` or `<type>(<scope>): <subject>`. The title must be in English, summarize the overall result of the branch, and not copy a single commit. Avoid vague subjects such as `update` or `fix issues`.

### 6. Generate the body from the template

Read `.github/PULL_REQUEST_TEMPLATE.md`, then:

- Write all inserted content in English.
- Preserve every section, its order, and every checklist option.
- Select the closest change type without deleting unselected options.
- Fill `Related Issues` with a real issue; use `None` when there is no issue.
- Use `Background and Solution` to explain the problem, solution, and external impact.
- Use `Change Log` to describe user- or developer-visible impact; use `N/A` when no changelog is needed.
- Do not add sections that are absent from the template.

### 7. Check verification status

Run checks appropriate to the change, typically:

```bash
pnpm lint
pnpm typecheck
```

Never claim an unrun check passed. If the template has no verification section, report verification in the confirmation summary without changing the template structure.

### 8. Ask for confirmation

Show the `Base branch`, `Head branch`, `PR title`, complete template-based `PR body`, verification status, and unresolved items. Do not push or create the PR without explicit confirmation.

### 9. Create the PR

After confirmation, check the remote, tracking branch, and target repository in the host environment. The target repository must explicitly be `vuejs-community/vuejs-community`; do not rely on `gh` inference.

```bash
git push -u <remote> <head-branch>
gh pr create \
  --repo vuejs-community/vuejs-community \
  --base <base> \
  --head <head-branch> \
  --title "<title>" \
  --body-file <body-file>
```

Use host authentication and network state for `git push`, `gh repo view`, and `gh pr create`. Return the PR URL after creation.
