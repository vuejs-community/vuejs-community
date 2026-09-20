import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-json5',
  description: 'Plugin for allowing .json5 and .jsonc files to be loaded.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'json5',
    'jsonc',
    'json',
  ],
  links: {
    github: 'https://github.com/sneakylenny/vite-plugin-json5',
    npm: 'https://www.npmjs.com/package/vite-plugin-json5',
    website: 'https://github.com/sneakylenny/vite-plugin-json5#readme',
  },
  source: {
    github: 'sneakylenny/vite-plugin-json5',
    npm: 'vite-plugin-json5',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 207861,
      weekly: 43748,
    },
  },
})
