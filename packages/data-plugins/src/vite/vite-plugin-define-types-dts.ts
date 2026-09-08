import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-define-types-dts',
  description: 'Generate TypeScript declaration files from Vite define config.',
  icon: 'logos:vite-icon',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'define',
    'dts',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'BINGWU2003/vite-plugin-define-types-dts',
    npm: 'vite-plugin-define-types-dts',
  },
  links: {
    github: 'https://github.com/BINGWU2003/vite-plugin-define-types-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-define-types-dts',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
