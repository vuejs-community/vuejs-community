import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mf-cloud-component/vite',
  description: 'Vite plugin for mf-cloud-component',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mf-cloud-component',
    'vite-plugin',
    'cloud-component',
    'module-federation',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@mf-cloud-component/vite',
  },
  source: {
    npm: '@mf-cloud-component/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
