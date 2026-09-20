import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uni-cdn-uploader',
  description: '将 uniapp + vue3 + ts 小程序的静态资源自动上传到 CDN，并在构建时替换路径',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'uniapp',
    'vue3',
    'typescript',
    'mp-weixin',
    'mp-alipay',
    'cdn',
    'vite-plugin',
    'tos',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/uni-cdn-uploader',
  },
  source: {
    npm: 'uni-cdn-uploader',
  },
})
