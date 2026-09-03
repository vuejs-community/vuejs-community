import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@apps-in-toss/devtools',
  description: 'Browser development tools for Apps in Toss mini-apps — mock SDK, floating devtools panel, and universal bundler plugin. devDependency only; contributes nothing to a production bundle',
  version: '3.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@apps-in-toss/devtools',
  },
  stats: {
    downloads: {
      monthly: 6939,
      weekly: 3114,
    },
  },
})
