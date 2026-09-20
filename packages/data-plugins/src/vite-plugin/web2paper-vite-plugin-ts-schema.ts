import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@web2paper/vite-plugin-ts-schema',
  description: 'Vite plugin to generate a JSON schema from a typescript type.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'web2paper',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@web2paper/vite-plugin-ts-schema',
    website: 'https://web2paper.com',
  },
  source: {
    npm: '@web2paper/vite-plugin-ts-schema',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
