import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-formkit',
  description: 'Automatic FormKit configuration 🪄',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'formkit',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'transform',
  ],
  source: {
    github: 'formkit/unplugin-formkit',
    npm: 'unplugin-formkit',
  },
  links: {
    github: 'https://github.com/formkit/unplugin-formkit',
    npm: 'https://www.npmjs.com/package/unplugin-formkit',
    website: 'https://github.com/formkit/unplugin-formkit#readme',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 156735,
      weekly: 38811,
    },
  },
})
