import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-string-to-audio',
  description: '在打包过程中自动将字符串转换为语音文件并添加到最终的打包文件里面, 支持Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'transform',
    'audio',
    '文字转语音',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-string-to-audio',
  },
  source: {
    npm: 'unplugin-string-to-audio',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 54,
      weekly: 6,
    },
  },
})
