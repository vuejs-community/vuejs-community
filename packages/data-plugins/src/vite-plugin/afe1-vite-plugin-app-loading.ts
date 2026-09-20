import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@afe1/vite-plugin-app-loading',
  description: 'Inject a loading overlay into Vite HTML and expose a manual remover for app startup.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'loading',
    'app-loading',
    'html-injection',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@afe1/vite-plugin-app-loading',
  },
  source: {
    npm: '@afe1/vite-plugin-app-loading',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 4,
    },
  },
})
