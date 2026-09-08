import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-webbundle',
  description: 'Rollup plugin to generate WebBundle output.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'GoogleChromeLabs/webbundle-plugins',
    npm: 'rollup-plugin-webbundle',
  },
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
