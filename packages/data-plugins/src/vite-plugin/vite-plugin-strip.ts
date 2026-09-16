import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-strip',
  description: 'Remove or strip specific code from your JavaScript or TypeScript.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vite',
    'console',
    'vite-plugin',
    'debug',
  ],
  source: {
    github: 'YaroED/vite-plugin-strip',
    npm: 'vite-plugin-strip',
  },
  links: {
    github: 'https://github.com/YaroED/vite-plugin-strip',
    npm: 'https://www.npmjs.com/package/vite-plugin-strip',
    website: 'https://github.com/YaroED/vite-plugin-strip#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 583,
      weekly: 130,
    },
  },
})
