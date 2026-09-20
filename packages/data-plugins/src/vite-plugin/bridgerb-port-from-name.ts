import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bridgerb/port-from-name',
  description: 'Deterministic Vite/SvelteKit dev-server port derived from your project name',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sveltekit',
    'port',
    'dev-server',
    'deterministic',
  ],
  links: {
    github: 'https://github.com/BridgerB/port-from-name',
    npm: 'https://www.npmjs.com/package/@bridgerb/port-from-name',
    website: 'https://github.com/BridgerB/port-from-name#readme',
  },
  source: {
    github: 'BridgerB/port-from-name',
    npm: '@bridgerb/port-from-name',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
