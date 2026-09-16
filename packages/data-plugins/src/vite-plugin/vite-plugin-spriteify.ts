import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spriteify',
  description: 'Vite plugin that integrated sly with vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sly',
    'sprite',
    'svg',
    'svgo',
  ],
  source: {
    github: 'rasyidf/vite-plugin-spriteify',
    npm: 'vite-plugin-spriteify',
  },
  links: {
    github: 'https://github.com/rasyidf/vite-plugin-spriteify',
    npm: 'https://www.npmjs.com/package/vite-plugin-spriteify',
    website: 'https://github.com/rasyidf/vite-plugin-spriteify#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
