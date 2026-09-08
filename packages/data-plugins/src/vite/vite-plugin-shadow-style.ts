import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shadow-style',
  description: 'A vite plugin to inject css into web components\' shadow dom',
  icon: 'logos:vite-icon',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'webcomponents',
    'css',
    'style',
    'shadow-dom',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'hood/vite-plugin-shadow-style',
    npm: 'vite-plugin-shadow-style',
  },
  links: {
    github: 'https://github.com/hood/vite-plugin-shadow-style',
    npm: 'https://www.npmjs.com/package/vite-plugin-shadow-style',
  },
  stats: {
    downloads: {
      monthly: 5096,
      weekly: 1622,
    },
  },
})
