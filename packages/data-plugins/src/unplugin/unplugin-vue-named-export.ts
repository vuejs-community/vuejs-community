import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-named-export',
  description: 'Named export for Vue SFC.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  links: {
    github: 'https://github.com/unplugin/unplugin-vue-named-export',
    npm: 'https://www.npmjs.com/package/unplugin-vue-named-export',
    website: 'https://github.com/unplugin/unplugin-vue-named-export#readme',
  },
  source: {
    github: 'unplugin/unplugin-vue-named-export',
    npm: 'unplugin-vue-named-export',
  },
  stats: {
    stars: 22,
    downloads: {
      monthly: 128,
      weekly: 19,
    },
  },
})
