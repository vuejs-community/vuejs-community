import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-libcss',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'zhiyuanzmj/unplugin-libcss',
    npm: 'unplugin-libcss',
  },
  links: {
    github: 'https://github.com/zhiyuanzmj/unplugin-libcss',
    npm: 'https://www.npmjs.com/package/unplugin-libcss',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 0,
    },
  },
})
