import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent-presence',
  description: 'Vite dev overlay for Pi agent presence',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pi-package',
    'pi-extension',
    'agent-presence',
  ],
  source: {
    npm: 'vite-plugin-agent-presence',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-agent-presence',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 60,
      weekly: 6,
    },
  },
})
