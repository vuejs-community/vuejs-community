import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@simbo/vite-plugin-nunjucks',
  description: 'Render Nunjucks templates in Vite HTML entries with layouts, locals and automatic reloads.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'nunjucks',
    'html',
    'templates',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@simbo/vite-plugin-nunjucks',
    website: 'https://github.com/simbo/packages/tree/main/packages/vite-plugin-nunjucks',
  },
  source: {
    npm: '@simbo/vite-plugin-nunjucks',
  },
})
