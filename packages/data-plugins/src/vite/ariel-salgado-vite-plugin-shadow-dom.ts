import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ariel-salgado/vite-plugin-shadow-dom',
  description: 'Vite plugin that isolates your app into a Shadow DOM — with zero changes to your application code',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'shadow-dom',
    'encapsulation',
    'css-isolation',
    'dom-isolation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ariel-salgado/vite-plugins',
    npm: 'https://www.npmjs.com/package/@ariel-salgado/vite-plugin-shadow-dom',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 7,
    },
  },
})
