import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@microsoft/applicationinsights-rollup-es5',
  description: 'Microsoft Application Insights JavaScript SDK - Rollup Plugin for IE/ES5 support',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'azure',
    'cloud',
    'microsoft',
    'application insights',
    'rollup',
    'rollup-plugin',
    'es5',
  ],
  source: {
    github: 'microsoft/ApplicationInsights-JS',
    npm: '@microsoft/applicationinsights-rollup-es5',
  },
  links: {
    github: 'https://github.com/microsoft/ApplicationInsights-JS',
    npm: 'https://www.npmjs.com/package/@microsoft/applicationinsights-rollup-es5',
    website: 'https://github.com/microsoft/ApplicationInsights-JS/tree/main/tools/rollup-es5',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 159,
      weekly: 8,
    },
  },
})
