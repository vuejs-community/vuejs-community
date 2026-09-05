import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent-presence',
  description: 'Vite dev overlay for Pi agent presence',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'pi-package',
    'pi-extension',
    'agent-presence',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-agent-presence',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 10,
    },
  },
})
