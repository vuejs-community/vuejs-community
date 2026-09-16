import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-monorepo',
  description: '[![npm](https://img.shields.io/npm/v/unplugin-monorepo?color=91B2D4&label=)](https://npmjs.com/package/unplugin-monorepo)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'monorepo',
    'pnpm',
    'source code',
    'DX',
  ],
  source: {
    github: 'antfu/unplugin-monorepo',
    npm: 'unplugin-monorepo',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-monorepo',
    npm: 'https://www.npmjs.com/package/unplugin-monorepo',
    website: 'https://github.com/antfu/unplugin-monorepo#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
