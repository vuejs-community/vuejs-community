import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-webbundle',
  description: 'Rollup plugin to generate WebBundle output.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'web-bundle',
    'isolated-web-app',
  ],
  source: {
    github: 'GoogleChromeLabs/webbundle-plugins',
    npm: 'rollup-plugin-webbundle',
  },
  links: {
    github: 'https://github.com/GoogleChromeLabs/webbundle-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-webbundle',
    website: 'https://github.com/GoogleChromeLabs/webbundle-plugins#readme',
  },
  stats: {
    stars: 64,
    downloads: {
      monthly: 633,
      weekly: 114,
    },
  },
})
