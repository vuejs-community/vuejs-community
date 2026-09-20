import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@helloliang/vite-plugin-version-json',
  description: 'Vite plugin to generate version.json with Git info and build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'git',
    'build-info',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@helloliang/vite-plugin-version-json',
  },
  source: {
    npm: '@helloliang/vite-plugin-version-json',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
