import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'create-nodejs-fn',
  description: 'Vite plugin to enable calling Node.js-dependent functions directly from Cloudflare Workers!!',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'cloudflare',
    'workers',
    'containers',
    'durable-objects',
    'vite',
    'vite-plugin',
    'node',
    'rpc',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/inaridiy/create-nodejs-fn',
    npm: 'https://www.npmjs.com/package/create-nodejs-fn',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
