import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-caddy-localhost',
  description: 'Unplugin: 用 Caddy 把 dev 映射到 https://xxx.localhost',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'rollup',
    'transform',
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/cheezone/unplugin-caddy-localhost',
    npm: 'https://www.npmjs.com/package/unplugin-caddy-localhost',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 6,
    },
  },
})
