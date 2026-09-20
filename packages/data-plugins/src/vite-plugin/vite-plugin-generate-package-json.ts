import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-package-json',
  description: 'Generate package.json file with packages from your Vite bundle',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/maccuaa/vite-plugin-generate-package-json',
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-package-json',
    website: 'https://github.com/maccuaa/vite-plugin-generate-package-json#readme',
  },
  source: {
    github: 'maccuaa/vite-plugin-generate-package-json',
    npm: 'vite-plugin-generate-package-json',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 1502,
      weekly: 273,
    },
  },
})
