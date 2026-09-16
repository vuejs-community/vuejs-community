import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tailor-platform/vite-plugin-app-shell',
  description: 'Vite plugin for file-based routing in AppShell applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'app-shell',
    'file-based-routing',
    'tailor-platform',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'tailor-platform/app-shell',
    npm: '@tailor-platform/vite-plugin-app-shell',
  },
  links: {
    github: 'https://github.com/tailor-platform/app-shell',
    npm: 'https://www.npmjs.com/package/@tailor-platform/vite-plugin-app-shell',
    website: 'https://github.com/tailor-platform/app-shell/tree/main/packages/vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 377,
      weekly: 377,
    },
  },
})
