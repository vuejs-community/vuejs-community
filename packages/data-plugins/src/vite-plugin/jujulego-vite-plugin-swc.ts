import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jujulego/vite-plugin-swc',
  description: 'A simple plugin to use swc with Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'swc',
  ],
  links: {
    github: 'https://github.com/Jujulego/vite-plugin-swc',
    npm: 'https://www.npmjs.com/package/@jujulego/vite-plugin-swc',
    website: 'https://github.com/Jujulego/vite-plugin-swc#readme',
  },
  source: {
    github: 'Jujulego/vite-plugin-swc',
    npm: '@jujulego/vite-plugin-swc',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1637,
      weekly: 450,
    },
  },
})
