import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bambuser/vite-plugin-bam-ui',
  description: 'Vite plugin to include Bam UI in html files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: '@bambuser/vite-plugin-bam-ui',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@bambuser/vite-plugin-bam-ui',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
