import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unocss/rollup',
  description: 'The Rollup and Rolldown plugin for UnoCSS',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'unocss',
    'rollup-plugin',
    'rolldown-plugin',
  ],
  source: {
    github: 'unocss/unocss',
    npm: '@unocss/rollup',
  },
  links: {
    github: 'https://github.com/unocss/unocss',
    npm: 'https://www.npmjs.com/package/@unocss/rollup',
    website: 'https://unocss.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 46581,
      weekly: 43468,
    },
  },
})
