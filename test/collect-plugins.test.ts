import assert from 'node:assert/strict'
import {
  normalizeHttpUrl,
  resolvePluginFileNames,
  transformToCommunityProject,
} from '../packages/generate-data/src/collect-plugins/index.ts'
import { PLUGIN_DEFINITIONS } from '../packages/generate-data/src/collect-plugins/types.ts'

assert.equal(
  normalizeHttpUrl('https://github.com/vuejs-community/vuejs-community'),
  'https://github.com/vuejs-community/vuejs-community',
  'valid HTTP links should be preserved',
)

assert.equal(
  normalizeHttpUrl('hhttps://github.com/chang0022/vite-plugin-blob-storage'),
  undefined,
  'malformed npm homepage links should be rejected',
)

const collected = transformToCommunityProject({
  package: {
    name: '@metalist/vite-plugin-blob-storage',
    version: '1.0.0',
    description: 'Vite plugin for uploading files to Azure Blob Storage.',
    date: '2026-09-20T00:00:00.000Z',
    links: {
      npm: 'https://www.npmjs.com/package/@metalist/vite-plugin-blob-storage',
      homepage: 'hhttps://github.com/chang0022/vite-plugin-blob-storage',
      repository: 'git+https://github.com/chang0022/vite-plugin-blob-storage.git',
    },
    publisher: {
      username: 'metalist',
    },
  },
  score: {
    final: 1,
    detail: {
      quality: 1,
      popularity: 1,
      maintenance: 1,
    },
  },
  downloads: {
    monthly: 22,
    weekly: 7,
  },
}, PLUGIN_DEFINITIONS[0])

assert.equal(
  collected.project.links?.website,
  'https://github.com/chang0022/vite-plugin-blob-storage',
  'an invalid homepage should fall back to the package GitHub repository',
)

const collidingProjects = [
  '@rollup/plugin-eslint',
  'rollup-plugin-eslint',
  '@rollup-plugin/eslint',
].map(name => ({
  type: 'rollup-plugin' as const,
  project: { name },
}))

assert.deepEqual(
  resolvePluginFileNames(collidingProjects),
  [
    '%40rollup%2Fplugin-eslint.ts',
    'rollup-plugin-eslint.ts',
    '%40rollup-plugin%2Feslint.ts',
  ],
  'scoped and unscoped packages that share a legacy filename should get unique paths',
)
