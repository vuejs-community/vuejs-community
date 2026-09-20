import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rum-sourcemap-plugin',
  description: 'Webpack和Vite插件，用于在打包完成后自动将生成的.map文件上传至RUM监控系统',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webpack-plugin',
    'vite-plugin',
    'sourcemap',
    'rum',
    'monitoring',
    'upload',
    'tencentcloud',
  ],
  links: {
    github: 'https://github.com/yourusername/rum-sourcemap-plugin',
    npm: 'https://www.npmjs.com/package/rum-sourcemap-plugin',
    website: 'https://github.com/yourusername/rum-sourcemap-plugin#readme',
  },
  source: {
    github: 'yourusername/rum-sourcemap-plugin',
    npm: 'rum-sourcemap-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
