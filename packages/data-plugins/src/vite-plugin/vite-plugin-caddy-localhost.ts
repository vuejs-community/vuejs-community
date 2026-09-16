import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-caddy-localhost',
  description: '用 Caddy 把本地的开发服务映射到 https://xxx.localhost',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'caddy',
    'localhost',
    'https',
    'reverse-proxy',
  ],
  source: {
    npm: 'vite-plugin-caddy-localhost',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-caddy-localhost',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
