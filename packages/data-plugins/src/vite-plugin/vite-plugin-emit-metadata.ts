import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-emit-metadata',
  description: 'Vite plugin to support emitDecoratorMetadata',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'emitDecoratorMetadata',
  ],
  links: {
    github: 'https://github.com/arjendeblok/vite-plugin-emit-metadata',
    npm: 'https://www.npmjs.com/package/vite-plugin-emit-metadata',
    website: 'https://github.com/arjendeblok/vite-plugin-emit-metadata#readme',
  },
  source: {
    github: 'arjendeblok/vite-plugin-emit-metadata',
    npm: 'vite-plugin-emit-metadata',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 783,
      weekly: 167,
    },
  },
})
