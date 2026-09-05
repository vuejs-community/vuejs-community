import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prettier-dts',
  description: 'Auto-format auto-generated .d.ts files with Prettier in Vite projects',
  version: '0.1.13',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'prettier',
    'dts',
    'declaration',
    'format',
    'auto-import',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cg37/vite-plugin-prettier-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-prettier-dts',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 0,
    },
  },
})
