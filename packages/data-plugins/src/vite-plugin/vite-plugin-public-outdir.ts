import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-public-outdir',
  description: 'Adjust where public files are copied to in a build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vitejs',
    'plugin',
    'vite-plugin',
    'public',
    'outdir',
    'copy',
  ],
  source: {
    github: 'wrapperup/vite-plugin-public-outdir',
    npm: 'vite-plugin-public-outdir',
  },
  links: {
    github: 'https://github.com/wrapperup/vite-plugin-public-outdir',
    npm: 'https://www.npmjs.com/package/vite-plugin-public-outdir',
    website: 'https://github.com/wrapperup/vite-plugin-public-outdir',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
