import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iframe-communication',
  description: 'Vite plugin for enabling iframe communication with parent windows using MessageChannel',
  icon: 'logos:vite-icon',
  version: '1.8.3-beta.15',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'iframe',
    'communication',
    'postMessage',
    'MessageChannel',
    'development',
    'navigation',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'zenobia-pay/vite-plugin-iframe-communication',
    npm: 'vite-plugin-iframe-communication',
  },
  links: {
    github: 'https://github.com/zenobia-pay/vite-plugin-iframe-communication',
    npm: 'https://www.npmjs.com/package/vite-plugin-iframe-communication',
  },
  stats: {
    downloads: {
      monthly: 269,
      weekly: 5,
    },
  },
})
