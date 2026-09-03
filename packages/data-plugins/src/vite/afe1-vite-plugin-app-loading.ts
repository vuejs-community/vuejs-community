import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@afe1/vite-plugin-app-loading',
  description: 'Inject a loading overlay into Vite HTML and expose a manual remover for app startup.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'loading',
    'app-loading',
    'html-injection',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@afe1/vite-plugin-app-loading',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
