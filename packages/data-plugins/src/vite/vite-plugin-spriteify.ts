import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spriteify',
  description: 'Vite plugin that integrated sly with vite',
  icon: 'logos:vite-icon',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sly',
    'sprite',
    'svg',
    'svgo',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'rasyidf/vite-plugin-spriteify',
    npm: 'vite-plugin-spriteify',
  },
  links: {
    github: 'https://github.com/rasyidf/vite-plugin-spriteify',
    npm: 'https://www.npmjs.com/package/vite-plugin-spriteify',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
