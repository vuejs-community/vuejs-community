import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@im-nassinger/vite-plugin-openfl',
  description: 'Vite plugin that resolves OpenFL\'s namespace and generated class modules for use with npm bundling.',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'openfl',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@im-nassinger/vite-plugin-openfl',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 4,
    },
  },
})
