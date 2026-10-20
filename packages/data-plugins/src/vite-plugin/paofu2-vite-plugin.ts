import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@paofu2/vite-plugin',
  description: 'paofu 的可选 Vite 插件：构建时处理 .html 模板，支持 paofurender() 与自动注册目录',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'template',
    'paofu',
  ],
  links: {
    github: 'https://github.com/nitai2plipala/paofu',
    npm: 'https://www.npmjs.com/package/@paofu2/vite-plugin',
    website: 'https://github.com/nitai2plipala/paofu#readme',
  },
  source: {
    github: 'nitai2plipala/paofu',
    npm: '@paofu2/vite-plugin',
  },
})
