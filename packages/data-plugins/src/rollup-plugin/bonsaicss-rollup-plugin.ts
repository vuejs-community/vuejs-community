import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bonsaicss/rollup-plugin',
  description: 'BonsaiCSS Rollup plugin — prune unused CSS during Rollup builds 🌳',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'css',
    'rollup',
    'rollup-plugin',
    'pruner',
    'bonsaicss',
  ],
  links: {
    github: 'https://github.com/Bonsai-CSS/bonsaicss',
    npm: 'https://www.npmjs.com/package/@bonsaicss/rollup-plugin',
    website: 'https://github.com/Bonsai-CSS/bonsaicss#readme',
  },
  source: {
    github: 'Bonsai-CSS/bonsaicss',
    npm: '@bonsaicss/rollup-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
