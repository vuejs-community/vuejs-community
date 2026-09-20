import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-img-upload',
  description: 'A Vite plugin to upload your image assets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'image compression',
    'image optimization',
    'upload',
    'sharp.js',
  ],
  links: {
    github: 'https://github.com/qp91abc1234/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-img-upload',
    website: 'https://github.com/qp91abc1234/vite-plugins/tree/master/packages/viteImgUpload',
  },
  source: {
    github: 'qp91abc1234/vite-plugins',
    npm: 'vite-img-upload',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
