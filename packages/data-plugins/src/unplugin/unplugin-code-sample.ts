import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-code-sample',
  description: 'Help you display code examples of the current page, support multiple packers, powered by unplugin',
  icon: 'icon:dark-unplugin',
  version: '0.1.10',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'code sample',
    'astro',
    'rspack',
    'nuxt',
    'farm',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'ray-d-song/unplugin-code-sample',
    npm: 'unplugin-code-sample',
  },
  links: {
    github: 'https://github.com/ray-d-song/unplugin-code-sample',
    npm: 'https://www.npmjs.com/package/unplugin-code-sample',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 4,
    },
  },
})
