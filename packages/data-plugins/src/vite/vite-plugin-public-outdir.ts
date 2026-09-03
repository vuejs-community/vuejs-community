import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-public-outdir',
  description: 'Adjust where public files are copied to in a build',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vitejs',
    'plugin',
    'vite-plugin',
    'public',
    'outdir',
    'copy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wrapperup/vite-plugin-public-outdir',
    npm: 'https://www.npmjs.com/package/vite-plugin-public-outdir',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
