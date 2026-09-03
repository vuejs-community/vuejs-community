import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cmtlyt/unplugin-shadcn-registry-generate',
  description: '生成 shadcn 的 registry 和对应的 registry-item',
  version: '0.1.7',
  category: 'plugin',
  tags: [
    'cmtlyt',
    'unplugin',
    'shadcn',
    'shadcn-plugin',
    'generate-registry',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/cmtlyt/unplugin-shadcn-registry-generate',
    npm: 'https://www.npmjs.com/package/@cmtlyt/unplugin-shadcn-registry-generate',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 5,
    },
  },
})
