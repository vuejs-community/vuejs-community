import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@myriaddreamin/vite-plugin-typst',
  description: 'Vite plugin for typst',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typst',
  ],
  source: {
    github: 'Myriad-Dreamin/typst.ts',
    npm: '@myriaddreamin/vite-plugin-typst',
  },
  links: {
    github: 'https://github.com/Myriad-Dreamin/typst.ts',
    npm: 'https://www.npmjs.com/package/@myriaddreamin/vite-plugin-typst',
    website: 'https://github.com/Myriad-Dreamin/typst.ts#readme',
  },
  stats: {
    stars: 1217,
    downloads: {
      monthly: 93,
      weekly: 5,
    },
  },
})
