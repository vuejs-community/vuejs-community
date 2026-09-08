import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-toml',
  description: 'Allow importing TOML files as JSON or Strings',
  icon: 'icon:dark-unplugin',
  version: '2.3.0',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  source: {
    github: 'luxass/unplugin-toml',
    npm: 'unplugin-toml',
  },
  links: {
    github: 'https://github.com/luxass/unplugin-toml',
    npm: 'https://www.npmjs.com/package/unplugin-toml',
  },
  stats: {
    downloads: {
      monthly: 91,
      weekly: 17,
    },
  },
})
