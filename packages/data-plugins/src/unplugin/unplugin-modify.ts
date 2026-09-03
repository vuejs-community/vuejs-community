import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-modify',
  description: 'Replace target strings in files while bundling.',
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
