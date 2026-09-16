import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@apps-in-toss/devtools',
  description: 'Browser development tools for Apps in Toss mini-apps — mock SDK, floating devtools panel, and universal bundler plugin. devDependency only; contributes nothing to a production bundle',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'apps-in-toss',
    'devtools',
    'mini-app',
    'miniapp',
    'mock',
    'sdk',
    'simulator',
    'testing',
    'toss',
    'vite-plugin',
    'webpack-plugin',
  ],
  source: {
    npm: '@apps-in-toss/devtools',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@apps-in-toss/devtools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10752,
      weekly: 2645,
    },
  },
})
