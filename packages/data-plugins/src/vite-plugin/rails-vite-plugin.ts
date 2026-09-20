import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rails-vite-plugin',
  description: 'Vite plugin for Rails integration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'rails',
    'jsbundling',
    'jsbundling-rails',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/skryukov/rails_vite',
    npm: 'https://www.npmjs.com/package/rails-vite-plugin',
    website: 'https://github.com/skryukov/rails_vite',
  },
  source: {
    github: 'skryukov/rails_vite',
    npm: 'rails-vite-plugin',
  },
  stats: {
    stars: 89,
    downloads: {
      monthly: 11954,
      weekly: 1820,
    },
  },
})
