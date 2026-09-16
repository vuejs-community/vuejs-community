import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zhoumutou/vite-plugin-inline',
  description: 'A Vite plugin that inlines CSS and JavaScript assets into HTML files, generating a single, self-contained HTML file with no external dependencies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bundle',
    'html',
    'inline',
    'single',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'zhoumutou/vite-plugin-inline',
    npm: '@zhoumutou/vite-plugin-inline',
  },
  links: {
    github: 'https://github.com/zhoumutou/vite-plugin-inline',
    npm: 'https://www.npmjs.com/package/@zhoumutou/vite-plugin-inline',
    website: 'https://github.com/zhoumutou/vite-plugin-inline#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 177,
      weekly: 63,
    },
  },
})
