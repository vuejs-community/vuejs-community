import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ariel-salgado/vite-plugin-shadow-dom',
  description: 'Vite plugin that isolates your app into a Shadow DOM — with zero changes to your application code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'shadow-dom',
    'encapsulation',
    'css-isolation',
    'dom-isolation',
  ],
  links: {
    github: 'https://github.com/ariel-salgado/vite-plugins',
    npm: 'https://www.npmjs.com/package/@ariel-salgado/vite-plugin-shadow-dom',
    website: 'https://github.com/ariel-salgado/vite-plugins/tree/main/packages/vite-plugin-shadow-dom#readme',
  },
  source: {
    github: 'ariel-salgado/vite-plugins',
    npm: '@ariel-salgado/vite-plugin-shadow-dom',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 5,
    },
  },
})
