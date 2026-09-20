import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-caddy-localhost',
  description: 'Unplugin: 用 Caddy 把 dev 映射到 https://xxx.localhost',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'rollup',
    'transform',
    'unplugin',
    'vite',
    'webpack',
  ],
  links: {
    github: 'https://github.com/cheezone/unplugin-caddy-localhost',
    npm: 'https://www.npmjs.com/package/unplugin-caddy-localhost',
    website: 'https://github.com/cheezone/unplugin-caddy-localhost#readme',
  },
  source: {
    github: 'cheezone/unplugin-caddy-localhost',
    npm: 'unplugin-caddy-localhost',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 5,
    },
  },
})
