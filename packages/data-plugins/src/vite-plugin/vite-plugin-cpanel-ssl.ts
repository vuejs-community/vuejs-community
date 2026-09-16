import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cpanel-ssl',
  description: 'Automatically use your cPanel SSL certs and keys for the Vite dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dev',
    'whm',
    'cpanel',
    'ssl',
    'secure',
  ],
  source: {
    github: 'evo-mark/vite-plugin-cpanel-ssl',
    npm: 'vite-plugin-cpanel-ssl',
  },
  links: {
    github: 'https://github.com/evo-mark/vite-plugin-cpanel-ssl',
    npm: 'https://www.npmjs.com/package/vite-plugin-cpanel-ssl',
    website: 'https://github.com/evo-mark/vite-plugin-cpanel-ssl#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 57,
      weekly: 8,
    },
  },
})
