import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-static-cdn',
  description: '自动上传静态资源到cdn服务器',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/Alex-Programer/vite-static-cdn',
    npm: 'https://www.npmjs.com/package/vite-static-cdn',
    website: 'https://github.com/Alex-Programer/vite-static-cdn#readme',
  },
  source: {
    github: 'Alex-Programer/vite-static-cdn',
    npm: 'vite-static-cdn',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
