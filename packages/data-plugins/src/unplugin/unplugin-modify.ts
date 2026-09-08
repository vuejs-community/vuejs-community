import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-modify',
  description: 'Replace target strings in files while bundling.',
  icon: 'icon:dark-unplugin',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'replace',
    'modify',
    'esbuild',
    'rollup',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'zekunjin/unplugin-modify',
    npm: 'unplugin-modify',
  },
  links: {
    github: 'https://github.com/zekunjin/unplugin-modify',
    npm: 'https://www.npmjs.com/package/unplugin-modify',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
