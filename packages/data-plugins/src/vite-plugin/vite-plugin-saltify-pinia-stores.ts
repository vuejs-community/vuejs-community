import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-saltify-pinia-stores',
  description: 'Saltify pinia-store\'s ids',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'pinia-stores',
    'saltify',
    'uniqueizer',
    'mfe',
  ],
  source: {
    github: 'khodakova/saltify-pinia-stores',
    npm: 'vite-plugin-saltify-pinia-stores',
  },
  links: {
    github: 'https://github.com/khodakova/saltify-pinia-stores',
    npm: 'https://www.npmjs.com/package/vite-plugin-saltify-pinia-stores',
    website: 'https://github.com/khodakova/saltify-pinia-stores#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 82,
      weekly: 8,
    },
  },
})
