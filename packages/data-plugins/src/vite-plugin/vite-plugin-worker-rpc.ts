import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-worker-rpc',
  description: 'Import named functions from .rpc modules and run them in Web Workers automatically.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'worker',
    'web-worker',
    'rpc',
    'typescript',
  ],
  source: {
    github: 'fenghengzhi/vite-plugin-worker-rpc',
    npm: 'vite-plugin-worker-rpc',
  },
  links: {
    github: 'https://github.com/fenghengzhi/vite-plugin-worker-rpc',
    npm: 'https://www.npmjs.com/package/vite-plugin-worker-rpc',
    website: 'https://github.com/fenghengzhi/vite-plugin-worker-rpc#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
