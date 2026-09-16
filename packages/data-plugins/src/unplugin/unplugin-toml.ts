import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-toml',
  description: 'Allow importing TOML files as JSON or Strings',
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
    'toml',
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
  ],
  source: {
    github: 'luxass/unplugin-toml',
    npm: 'unplugin-toml',
  },
  links: {
    github: 'https://github.com/luxass/unplugin-toml',
    npm: 'https://www.npmjs.com/package/unplugin-toml',
    website: 'https://github.com/luxass/unplugin-toml#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 56,
      weekly: 5,
    },
  },
})
