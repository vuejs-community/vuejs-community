import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ui-doc/rollup',
  description: 'Rollup plugin for UI-Doc generation.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'documentation',
    'generation',
    'rollup',
    'rollup-plugin',
    'styleguide',
    'ui-doc',
    'ui-kit',
  ],
  source: {
    github: 'gherrink/ui-doc',
    npm: '@ui-doc/rollup',
  },
  links: {
    github: 'https://github.com/gherrink/ui-doc',
    npm: 'https://www.npmjs.com/package/@ui-doc/rollup',
    website: 'https://github.com/gherrink/ui-doc/tree/master/packages/rollup#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 155,
      weekly: 12,
    },
  },
})
