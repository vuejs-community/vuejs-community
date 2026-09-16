import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-diff-compiler',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'diff-compiler',
    'transform',
  ],
  source: {
    github: 'FliPPeDround/vite-plugin-diff-compiler',
    npm: 'vite-plugin-diff-compiler',
  },
  links: {
    github: 'https://github.com/FliPPeDround/vite-plugin-diff-compiler',
    npm: 'https://www.npmjs.com/package/vite-plugin-diff-compiler',
    website: 'https://github.com/FliPPeDround/vite-plugin-diff-compiler#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
