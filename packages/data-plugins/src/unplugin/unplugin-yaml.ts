import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-yaml',
  description: 'Allow importing YAML files as JSON or Strings',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'astro',
    'esbuild',
    'nuxt',
    'rolldown',
    'rolldown-plugin',
    'rollup',
    'rollup-plugin',
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'yaml',
  ],
  source: {
    github: 'luxass/unplugin-yaml',
    npm: 'unplugin-yaml',
  },
  links: {
    github: 'https://github.com/luxass/unplugin-yaml',
    npm: 'https://www.npmjs.com/package/unplugin-yaml',
    website: 'https://github.com/luxass/unplugin-yaml#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 51575,
      weekly: 8018,
    },
  },
})
