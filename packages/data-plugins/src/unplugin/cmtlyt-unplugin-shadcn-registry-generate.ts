import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cmtlyt/unplugin-shadcn-registry-generate',
  description: '生成 shadcn 的 registry 和对应的 registry-item',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'cmtlyt',
    'unplugin',
    'shadcn',
    'shadcn-plugin',
    'generate-registry',
  ],
  links: {
    github: 'https://github.com/cmtlyt/unplugin-shadcn-registry-generate',
    npm: 'https://www.npmjs.com/package/@cmtlyt/unplugin-shadcn-registry-generate',
    website: 'https://github.com/cmtlyt/unplugin-shadcn-registry-generate#readme',
  },
  source: {
    github: 'cmtlyt/unplugin-shadcn-registry-generate',
    npm: '@cmtlyt/unplugin-shadcn-registry-generate',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 5,
    },
  },
})
