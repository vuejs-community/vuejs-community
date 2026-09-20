import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-modify',
  description: 'Replace target strings in files while bundling.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'replace',
    'modify',
    'esbuild',
    'rollup',
  ],
  links: {
    github: 'https://github.com/zekunjin/unplugin-modify',
    npm: 'https://www.npmjs.com/package/unplugin-modify',
    website: 'https://github.com/zekunjin/unplugin-modify#readme',
  },
  source: {
    github: 'zekunjin/unplugin-modify',
    npm: 'unplugin-modify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
