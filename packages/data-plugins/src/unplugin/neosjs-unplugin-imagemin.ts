import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@neosjs/unplugin-imagemin',
  description: '基于squoosh和sharp的图像压缩插件',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'imagemin',
    'neosjs',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@neosjs/unplugin-imagemin',
  },
  source: {
    npm: '@neosjs/unplugin-imagemin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 8,
    },
  },
})
