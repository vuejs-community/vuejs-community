import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@im-nassinger/vite-plugin-openfl',
  description: 'Vite plugin that resolves OpenFL\'s namespace and generated class modules for use with npm bundling.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'openfl',
  ],
  source: {
    npm: '@im-nassinger/vite-plugin-openfl',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@im-nassinger/vite-plugin-openfl',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
