import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mock-data',
  description: 'Mocks API routes on the Vite dev server from a mock directory or inline route config, and can expose file-based routes to the browser for built static pages.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-mock-data',
  ],
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-mock-data',
    website: 'https://fengxinming.github.io/vite-plugins/plugins/vite-plugin-mock-data/quick-start',
  },
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-mock-data',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 818,
      weekly: 30,
    },
  },
})
