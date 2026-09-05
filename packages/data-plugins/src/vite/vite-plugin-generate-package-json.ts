import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-package-json',
  description: 'Generate package.json file with packages from your Vite bundle',
  version: '1.4.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/maccuaa/vite-plugin-generate-package-json',
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-package-json',
  },
  stats: {
    downloads: {
      monthly: 1854,
      weekly: 422,
    },
  },
})
