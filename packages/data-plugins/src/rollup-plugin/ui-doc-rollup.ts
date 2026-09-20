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
  links: {
    github: 'https://github.com/gherrink/ui-doc',
    npm: 'https://www.npmjs.com/package/@ui-doc/rollup',
    website: 'https://github.com/gherrink/ui-doc/tree/master/packages/rollup#readme',
  },
  source: {
    github: 'gherrink/ui-doc',
    npm: '@ui-doc/rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 155,
      weekly: 12,
    },
  },
})
