import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ruleenginejs/rollup-plugin-rule',
  description: 'Rollup plugin for compile rule files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'ruleengine',
    'rollup-plugin',
  ],
  source: {
    github: 'ruleenginejs/rollup-plugin-rule',
    npm: '@ruleenginejs/rollup-plugin-rule',
  },
  links: {
    github: 'https://github.com/ruleenginejs/rollup-plugin-rule',
    npm: 'https://www.npmjs.com/package/@ruleenginejs/rollup-plugin-rule',
    website: 'https://github.com/ruleenginejs/rollup-plugin-rule#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
