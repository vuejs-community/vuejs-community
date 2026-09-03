import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-string-to-audio',
  description: '在打包过程中自动将字符串转换为语音文件并添加到最终的打包文件里面, 支持Vite and Webpack',
  version: '2.1.7',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'transform',
    'audio',
    '文字转语音',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-string-to-audio',
  },
  stats: {
    downloads: {
      monthly: 88,
      weekly: 5,
    },
  },
})
