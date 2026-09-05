import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cpanel-ssl',
  description: 'Automatically use your cPanel SSL certs and keys for the Vite dev server',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'dev',
    'whm',
    'cpanel',
    'ssl',
    'secure',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/evo-mark/vite-plugin-cpanel-ssl',
    npm: 'https://www.npmjs.com/package/vite-plugin-cpanel-ssl',
  },
  stats: {
    downloads: {
      monthly: 204,
      weekly: 8,
    },
  },
})
