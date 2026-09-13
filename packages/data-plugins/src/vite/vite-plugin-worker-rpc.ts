import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-worker-rpc',
  description: 'Import named functions from .rpc modules and run them in Web Workers automatically.',
  icon: 'logos:vite-icon',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'worker',
    'web-worker',
    'rpc',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'fenghengzhi/vite-plugin-worker-rpc',
    npm: 'vite-plugin-worker-rpc',
  },
  links: {
    github: 'https://github.com/fenghengzhi/vite-plugin-worker-rpc',
    npm: 'https://www.npmjs.com/package/vite-plugin-worker-rpc',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
