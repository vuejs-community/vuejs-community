# PR Writing Notes and Examples

## Type Determination Notes

Don't classify as `fix` just because the diff contains logic code. First look at "what is actually being fixed".

Decision priority:

1. **docs / ci / build / chore take precedence over fix**
   - If the change is mainly docs, scripts, workflows, or the data generation pipeline, it usually should not be `fix` even if some logic code is involved
2. **fix is only for genuine defect fixes**
   - Use `fix` first when site behavior is broken, rendering is wrong, interactions don't match expectations, data generation errors out, or APIs return errors
3. **feat is only for externally visible new capability**
   - It's not a feat just because "internal code grew"; the site/users must actually gain new capability
4. **Data entry changes use a data-* scope**
   - New entry -> `feat(data-plugins)` / `feat(data-nuxt)`
   - Correcting entry metadata -> `fix(data-*)` or `chore(data-*)`
   - Stats-only updates -> usually handled automatically by the daily sync workflow; no separate PR needed

Examples:

- Fix a docs description error -> `docs: ...`
- Add a new Nuxt module entry -> `feat(data-nuxt): add radash module`
- Fix a missing-tags error in index.db generation -> `fix(db): handle undefined project tags`
- Adjust data type definitions -> `refactor(schema): make tags property optional`
- Fix GitHub Actions validation -> `ci: ...`
- Fix a dependency version issue -> `chore(deps): ...`
- Fix a real bug in a homepage component -> `fix(ui): ...`

## Related Issues Wording

When there is a clear issue:

- `close #12345`
- `fix #12345`
- `ref #12345`

When there is no issue:

- Briefly state where the requirement came from
- If there really is none, write `None`

Never invent issue numbers.

## Background and Changes Wording

Keep the background to 2–5 lines, answering:

1. What was wrong before (or why the addition was needed)
2. How it was changed this time
3. Whether site interactions, data display, or generated artifacts changed

Example:

```markdown
### Background

The index.db generation script crashes when an entry is missing the tags field, so the database cannot be rebuilt.

### Changes

- Added a null guard for tags before generation; missing tags are treated as an empty array
- Updated the tags type definition in `@vuejs-community/schema` to be optional

### Related Issues

None

### Verification

- `pnpm lint` / `pnpm typecheck` pass
- Ran `pnpm generate:db`; index.db generates correctly and site data displays correctly
```

For data PRs, note the affected entries under "Changes":

```markdown
### Changes

- Added new Vite plugin entries: vite-plugin-11th-server, vite-plugin-abbrlink
```

## Verification Wording

Choose content based on the change type:

- General: `pnpm lint`, `pnpm typecheck`
- Data changes: `pnpm generate:db`, confirming the index.db under `server/assets` was updated
- Data sync script changes: describe the result of a simulated run
- UI changes: manual verification steps + screenshot or GIF
- Server API changes: the request format and a sample response

## Baseline Branch Tips

The goal is to infer where the current branch was actually cut from, rather than blindly defaulting to `master`.

Suggested order:

1. The user explicitly specified a `base branch` -> use it directly
2. Check whether the checkout origin is visible in the `reflog`
3. Check `git branch -vv` tracking / upstream as supporting clues
4. If needed, compare candidate branches with `merge-base`
5. If still undetermined, fall back to the repository's default branch `master`

Suggested commands:

```bash
git branch --show-current
git branch -vv
git reflog show --date=local $(git branch --show-current)
git remote show origin
git merge-base HEAD <candidate-branch>
```

Notes:

- upstream is not guaranteed to be the parent branch; it's only a candidate clue
- `reflog` is closest to the real answer but may not always exist
- When uncertain, clearly tell the user "this is an inferred value"

## Confirmation Phrasing Before Creating the PR

Before actually running `gh pr create`, give the user a draft for confirmation, e.g.:

```markdown
I've prepared a draft PR for your confirmation:

- Base branch: `master`
- PR title: `fix(db): handle undefined project tags in index db generation`
- PR body:

  ### Background
  The index.db generation script crashes when an entry is missing the tags field...

  ### Changes
  - ...

  ### Related Issues
  None

  ### Verification
  ...

- To confirm: whether a related issue should be linked

If this looks good, I'll create the PR; if you'd like to change the title, base, or body, I'll revise it first.
```

## PR Title Examples

`vuejs-community` PR titles are always in English and follow Conventional Commits:

- `<type>: <subject>`
- `<type>(<scope>): <subject>`

Common `type`s: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

English examples:

- `feat(shared): add npm package download and github star utilities`
- `feat(data-nuxt): add comprehensive collection of Nuxt modules`
- `fix(db): handle undefined project tags in index db generation`
- `fix(database): update database path resolution for Vercel deployment`
- `refactor(schema): make tags property optional in type definition`
- `build(data-plugins): update index.db output path to server assets`
- `docs: add contributing guide`
- `ci: add generate-plugin-data workflow`
- `chore(deps): update nuxt and tailwindcss`

Don't write titles like these:

- A non-English title, e.g. writing the subject in another language (titles must be in English)
- `update` (missing type, and it's a filler word)
- `fix issues` (doesn't say what was fixed)
- `some improvements`
