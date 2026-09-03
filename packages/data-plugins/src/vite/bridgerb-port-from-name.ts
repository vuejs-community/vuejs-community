import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bridgerb/port-from-name',
  description: 'Deterministic Vite/SvelteKit dev-server port derived from your project name',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sveltekit',
    'port',
    'dev-server',
    'deterministic',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/BridgerB/port-from-name',
    npm: 'https://www.npmjs.com/package/@bridgerb/port-from-name',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 6,
    },
  },
})
