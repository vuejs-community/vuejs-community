import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@neosjs/unplugin-imagemin',
  description: '基于squoosh和sharp的图像压缩插件',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'imagemin',
    'neosjs',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@neosjs/unplugin-imagemin',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 6,
    },
  },
})
