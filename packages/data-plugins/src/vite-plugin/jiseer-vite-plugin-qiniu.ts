import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jiseer/vite-plugin-qiniu',
  description: 'Vite 插件：构建完成后把产物上传到七牛（凭证由服务端签发）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'qiniu',
    'kodo',
    'deploy',
    'cdn',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@jiseer/vite-plugin-qiniu',
  },
  source: {
    npm: '@jiseer/vite-plugin-qiniu',
  },
})
