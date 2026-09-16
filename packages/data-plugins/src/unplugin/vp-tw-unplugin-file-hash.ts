import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vp-tw/unplugin-file-hash',
  description: 'Deterministic compile-time file-scoped hashes for Unplugin projects.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'typescript',
    'compile-time',
    'file-hash',
    'deterministic',
  ],
  source: {
    github: 'vp-tw/unplugin-file-hash',
    npm: '@vp-tw/unplugin-file-hash',
  },
  links: {
    github: 'https://github.com/vp-tw/unplugin-file-hash',
    npm: 'https://www.npmjs.com/package/@vp-tw/unplugin-file-hash',
    website: 'https://github.com/vp-tw/unplugin-file-hash#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 276,
      weekly: 149,
    },
  },
})
