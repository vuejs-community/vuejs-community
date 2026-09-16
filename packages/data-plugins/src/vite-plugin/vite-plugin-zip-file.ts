import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zip-file',
  description: 'Zip files at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'zip',
    'compress',
  ],
  source: {
    github: 'Ssis53/vite-plugin-zip',
    npm: 'vite-plugin-zip-file',
  },
  links: {
    github: 'https://github.com/Ssis53/vite-plugin-zip',
    npm: 'https://www.npmjs.com/package/vite-plugin-zip-file',
    website: 'https://github.com/Ssis53/vite-plugin-zip#readme',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 2301,
      weekly: 409,
    },
  },
})
