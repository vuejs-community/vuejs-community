import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-kiss-config',
  description: '🍙 自动生成figma,masterGo,jsDesign多个平台manifest.json的打包插件',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'esbuild',
    'rollup',
    'vite',
    'webpack',
  ],
  source: {
    github: 'Leizhenpeng/design-tooltik-cn',
    npm: 'unplugin-kiss-config',
  },
  links: {
    github: 'https://github.com/Leizhenpeng/design-tooltik-cn',
    npm: 'https://www.npmjs.com/package/unplugin-kiss-config',
    website: 'https://github.com/Leizhenpeng/design-tooltik-cn/tree/main/packages/kiss-core#readme',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
