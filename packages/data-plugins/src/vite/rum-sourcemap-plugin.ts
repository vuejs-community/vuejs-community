import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rum-sourcemap-plugin',
  description: 'Webpack和Vite插件，用于在打包完成后自动将生成的.map文件上传至RUM监控系统',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'webpack-plugin',
    'vite-plugin',
    'sourcemap',
    'rum',
    'monitoring',
    'upload',
    'tencentcloud',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yourusername/rum-sourcemap-plugin',
    npm: 'https://www.npmjs.com/package/rum-sourcemap-plugin',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
