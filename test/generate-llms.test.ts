import assert from 'node:assert/strict'
import test from 'node:test'
import { generateLLms } from '../modules/llms/runtime/server/utils/generate-llms.ts'

const baseProject = {
  description: '',
  source: '',
  github: '',
  npm: '',
  website: '',
  downloads_monthly: 0,
  downloads_weekly: 0,
  stars: 0,
}

test('generateLLms groups categories and ranks projects by metrics', () => {
  const output = generateLLms([
    { ...baseProject, name: 'Lower', category: 'ui', stars: 10 },
    { ...baseProject, name: 'Higher', category: 'ui', stars: 20, website: 'https://example.com' },
    { ...baseProject, name: 'Module', category: 'nuxt' },
  ], {
    siteName: 'Vue Community',
    description: 'Vue ecosystem directory',
    siteUrl: 'https://vue-community.org/',
  })

  assert.match(output, /\[UI Libraries\]\(https:\/\/vue-community\.org\/ui\): 2 projects/)
  assert.match(output, /\[Nuxt Modules\]\(https:\/\/vue-community\.org\/nuxt\): 1 project/)
  assert.ok(output.indexOf('[Higher](https://example.com)') < output.indexOf('- Lower'))
})

test('generateLLms gives unknown categories a readable label', () => {
  const output = generateLLms([
    { ...baseProject, name: 'Example', category: 'custom-tools' },
  ], {
    siteName: 'Vue Community',
    description: 'Vue ecosystem directory',
    siteUrl: 'https://vue-community.org/',
  })

  assert.match(output, /## Custom Tools/)
})
