import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prettier-dts',
  description: 'Auto-format auto-generated .d.ts files with Prettier in Vite projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'prettier',
    'dts',
    'declaration',
    'format',
    'auto-import',
  ],
  links: {
    github: 'https://github.com/cg37/vite-plugin-prettier-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-prettier-dts',
    website: 'https://github.com/cg37/vite-plugin-prettier-dts#readme',
  },
  source: {
    github: 'cg37/vite-plugin-prettier-dts',
    npm: 'vite-plugin-prettier-dts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
