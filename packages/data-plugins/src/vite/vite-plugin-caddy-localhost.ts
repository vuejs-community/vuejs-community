import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-caddy-localhost',
  description: '用 Caddy 把本地的开发服务映射到 https://xxx.localhost',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'caddy',
    'localhost',
    'https',
    'reverse-proxy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-caddy-localhost',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
