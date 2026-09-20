import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@junobuild/vite-plugin',
  description: 'A Vite plugin for Juno',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'env',
    'environment',
    'variables',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  links: {
    github: 'https://github.com/junobuild/plugins',
    npm: 'https://www.npmjs.com/package/@junobuild/vite-plugin',
    website: 'https://juno.build',
  },
  source: {
    github: 'junobuild/plugins',
    npm: '@junobuild/vite-plugin',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 1374,
      weekly: 32,
    },
  },
})
