import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@titanium-sdk/vite-plugin-titanium',
  description: 'Vite plugin for building and serving Titanium apps.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'titanium',
    'vite-plugin',
  ],
  source: {
    github: 'tidev/titanium-vite',
    npm: '@titanium-sdk/vite-plugin-titanium',
  },
  links: {
    github: 'https://github.com/tidev/titanium-vite',
    npm: 'https://www.npmjs.com/package/@titanium-sdk/vite-plugin-titanium',
    website: 'https://github.com/tidev/titanium-vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
