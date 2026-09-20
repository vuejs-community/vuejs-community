import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-toml',
  description: 'A plugin for rollup/vite to import a toml file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'toml',
    'vite',
  ],
  links: {
    github: 'https://github.com/sapphi-red/vite-plugin-toml',
    npm: 'https://www.npmjs.com/package/vite-plugin-toml',
    website: 'https://github.com/sapphi-red/vite-plugin-toml#readme',
  },
  source: {
    github: 'sapphi-red/vite-plugin-toml',
    npm: 'vite-plugin-toml',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 7243,
      weekly: 1751,
    },
  },
})
