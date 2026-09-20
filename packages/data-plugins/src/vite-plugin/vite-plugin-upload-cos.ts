import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-upload-cos',
  description: 'vite-plugin-upload-cos upload assets to tencent cos server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin-upload-cos',
    'cos',
    'rollup-plugin',
    'plugin',
    'upload-cos',
  ],
  links: {
    github: 'https://github.com/JayHowe/vite-plugin-upload-cos',
    npm: 'https://www.npmjs.com/package/vite-plugin-upload-cos',
    website: 'https://github.com/JayHowe/vite-plugin-upload-cos#readme',
  },
  source: {
    github: 'JayHowe/vite-plugin-upload-cos',
    npm: 'vite-plugin-upload-cos',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
