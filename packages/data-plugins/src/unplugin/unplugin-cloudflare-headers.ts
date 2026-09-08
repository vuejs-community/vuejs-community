import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-cloudflare-headers',
  description: 'Generates cloudflare compatible headers with _headers file',
  icon: 'icon:dark-unplugin',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'cloudflare',
    'headers',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'logotip4ik/unplugin-cloudflare-headers',
    npm: 'unplugin-cloudflare-headers',
  },
  links: {
    github: 'https://github.com/logotip4ik/unplugin-cloudflare-headers',
    npm: 'https://www.npmjs.com/package/unplugin-cloudflare-headers',
  },
  stats: {
    downloads: {
      monthly: 34,
      weekly: 8,
    },
  },
})
