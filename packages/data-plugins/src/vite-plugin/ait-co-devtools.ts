import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ait-co/devtools',
  description: 'Browser development tools for Apps in Toss mini-apps — mock SDK, floating devtools panel, and universal bundler plugin. devDependency only; contributes nothing to a production bundle',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'apps-in-toss-community/devtools',
    npm: '@ait-co/devtools',
  },
  links: {
    github: 'https://github.com/apps-in-toss-community/devtools',
    npm: 'https://www.npmjs.com/package/@ait-co/devtools',
    website: 'https://github.com/apps-in-toss-community/devtools',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 2764,
      weekly: 223,
    },
  },
})
