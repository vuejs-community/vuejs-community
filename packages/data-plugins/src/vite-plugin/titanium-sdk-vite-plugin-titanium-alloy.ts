import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@titanium-sdk/vite-plugin-titanium-alloy',
  description: 'Alloy MVC support for the Titanium Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'alloy',
    'titanium',
    'vite-plugin',
  ],
  source: {
    github: 'tidev/titanium-vite',
    npm: '@titanium-sdk/vite-plugin-titanium-alloy',
  },
  links: {
    github: 'https://github.com/tidev/titanium-vite',
    npm: 'https://www.npmjs.com/package/@titanium-sdk/vite-plugin-titanium-alloy',
    website: 'https://github.com/tidev/titanium-vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
