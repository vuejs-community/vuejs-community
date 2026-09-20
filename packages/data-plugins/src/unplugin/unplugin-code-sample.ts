import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-code-sample',
  description: 'Help you display code examples of the current page, support multiple packers, powered by unplugin',
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
    'transform',
    'code sample',
    'astro',
    'rspack',
    'nuxt',
    'farm',
    'esbuild',
  ],
  links: {
    github: 'https://github.com/ray-d-song/unplugin-code-sample',
    npm: 'https://www.npmjs.com/package/unplugin-code-sample',
    website: 'https://github.com/ray-d-song/unplugin-code-sample#readme',
  },
  source: {
    github: 'ray-d-song/unplugin-code-sample',
    npm: 'unplugin-code-sample',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
