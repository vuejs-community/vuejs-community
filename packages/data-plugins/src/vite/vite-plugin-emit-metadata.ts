import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-emit-metadata',
  description: 'Vite plugin to support emitDecoratorMetadata',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'emitDecoratorMetadata',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'arjendeblok/vite-plugin-emit-metadata',
    npm: 'vite-plugin-emit-metadata',
  },
  links: {
    github: 'https://github.com/arjendeblok/vite-plugin-emit-metadata',
    npm: 'https://www.npmjs.com/package/vite-plugin-emit-metadata',
  },
  stats: {
    downloads: {
      monthly: 846,
      weekly: 167,
    },
  },
})
