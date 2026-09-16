import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fleet-frontend/unplugin-azure-blobs',
  description: 'Azure Blobs上传',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    npm: '@fleet-frontend/unplugin-azure-blobs',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@fleet-frontend/unplugin-azure-blobs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
