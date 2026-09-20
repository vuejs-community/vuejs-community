import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'create-nodejs-fn',
  description: 'Vite plugin to enable calling Node.js-dependent functions directly from Cloudflare Workers!!',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/inaridiy/create-nodejs-fn',
    npm: 'https://www.npmjs.com/package/create-nodejs-fn',
    website: 'https://github.com/inaridiy/create-nodejs-fn#readme',
  },
  source: {
    github: 'inaridiy/create-nodejs-fn',
    npm: 'create-nodejs-fn',
  },
  stats: {
    stars: 25,
    downloads: {
      monthly: 29,
      weekly: 5,
    },
  },
})
