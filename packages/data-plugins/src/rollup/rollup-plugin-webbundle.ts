import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-webbundle',
  description: 'Rollup plugin to generate WebBundle output.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'web-bundle',
    'isolated-web-app',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/GoogleChromeLabs/webbundle-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-webbundle',
  },
  stats: {
    downloads: {
      monthly: 663,
      weekly: 164,
    },
  },
})
