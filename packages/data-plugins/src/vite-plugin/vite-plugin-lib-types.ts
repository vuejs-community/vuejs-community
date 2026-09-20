import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lib-types',
  description: 'Generate dts file while building library, supports vue file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite plugin',
    'typescript',
    'dts',
  ],
  links: {
    github: 'https://github.com/keuby/vite-plugin-lib-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-lib-types',
    website: 'https://github.com/keuby/vite-plugin-lib-types/blob/main/README.md',
  },
  source: {
    github: 'keuby/vite-plugin-lib-types',
    npm: 'vite-plugin-lib-types',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 122,
      weekly: 12,
    },
  },
})
