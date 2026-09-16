import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-replace-style-inject',
  description: 'This plugin changes the path to style-inject and installs a built copy of it',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'style-inject',
    'replace-style-inject',
  ],
  source: {
    github: 'ZedByl/rollup-plugin-replace-style-inject',
    npm: 'rollup-plugin-replace-style-inject',
  },
  links: {
    github: 'https://github.com/ZedByl/rollup-plugin-replace-style-inject',
    npm: 'https://www.npmjs.com/package/rollup-plugin-replace-style-inject',
    website: 'https://github.com/ZedByl/rollup-plugin-replace-style-inject#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
