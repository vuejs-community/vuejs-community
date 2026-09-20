import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stylelish/vite-plugin-declare-type',
  description: 'Zero-config TypeScript declaration file generator for Vite library mode',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'typescript',
    'declaration',
  ],
  links: {
    github: 'https://github.com/StyleList94/plugin-baby',
    npm: 'https://www.npmjs.com/package/@stylelish/vite-plugin-declare-type',
    website: 'https://github.com/StyleList94/plugin-baby/tree/main/packages/vite-plugin-declare-type#readme',
  },
  source: {
    github: 'StyleList94/plugin-baby',
    npm: '@stylelish/vite-plugin-declare-type',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
