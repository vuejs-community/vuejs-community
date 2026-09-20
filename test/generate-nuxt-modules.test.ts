import assert from 'node:assert/strict'
import { normalizeGithubRepository } from '../packages/data-nuxt/scripts/generate-modules.ts'

assert.equal(
  normalizeGithubRepository('yamcodes/arkenv#main/packages/nuxt'),
  'yamcodes/arkenv',
  'Nuxt monorepo sources should be normalized for GitHub metrics',
)

assert.equal(
  normalizeGithubRepository('nuxt/modules'),
  'nuxt/modules',
  'canonical GitHub repository sources should be preserved',
)
