import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stylelish/rollup-plugin-im-client-component',
  description: 'Let your components say \'use client\' themselves',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'use-client',
    'react',
    'rsc',
    'server-components',
    'directive',
  ],
  links: {
    github: 'https://github.com/StyleList94/plugin-baby',
    npm: 'https://www.npmjs.com/package/@stylelish/rollup-plugin-im-client-component',
    website: 'https://github.com/StyleList94/plugin-baby/tree/main/packages/rollup-plugin-im-client-component#readme',
  },
  source: {
    github: 'StyleList94/plugin-baby',
    npm: '@stylelish/rollup-plugin-im-client-component',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
