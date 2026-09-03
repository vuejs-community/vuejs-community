import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@titanium-sdk/vite-plugin-titanium',
  description: 'Vite plugin for building and serving Titanium apps.',
  version: '1.0.0-alpha.1',
  category: 'plugin',
  tags: [
    'titanium',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tidev/titanium-vite',
    npm: 'https://www.npmjs.com/package/@titanium-sdk/vite-plugin-titanium',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
