import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ait-co/devtools',
  description: 'Browser development tools for Apps in Toss mini-apps — mock SDK, floating devtools panel, and universal bundler plugin. devDependency only; contributes nothing to a production bundle',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'apps-in-toss',
    'toss',
    'mini-app',
    'devtools',
    'mock',
    'sdk',
    'miniapp',
    'simulator',
    'testing',
    'vite-plugin',
    'webpack-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/apps-in-toss-community/devtools',
    npm: 'https://www.npmjs.com/package/@ait-co/devtools',
  },
  stats: {
    downloads: {
      monthly: 5502,
      weekly: 691,
    },
  },
})
