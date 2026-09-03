import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-kiss-config',
  description: '🍙 自动生成figma,masterGo,jsDesign多个平台manifest.json的打包插件',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'esbuild',
    'rollup',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/Leizhenpeng/design-tooltik-cn',
    npm: 'https://www.npmjs.com/package/unplugin-kiss-config',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
