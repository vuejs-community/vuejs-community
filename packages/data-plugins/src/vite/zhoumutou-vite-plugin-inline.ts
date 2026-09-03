import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zhoumutou/vite-plugin-inline',
  description: 'A Vite plugin that inlines CSS and JavaScript assets into HTML files, generating a single, self-contained HTML file with no external dependencies.',
  version: '0.5.2',
  category: 'plugin',
  tags: [
    'bundle',
    'html',
    'inline',
    'single',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zhoumutou/vite-plugin-inline',
    npm: 'https://www.npmjs.com/package/@zhoumutou/vite-plugin-inline',
  },
  stats: {
    downloads: {
      monthly: 223,
      weekly: 34,
    },
  },
})
