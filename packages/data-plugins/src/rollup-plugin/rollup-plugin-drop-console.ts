import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-drop-console',
  description: 'A rollup plugin used to drop (window.)console.*',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'transform',
    'console',
  ],
  links: {
    github: 'https://github.com/chouchouji/rollup-plugin-drop-console',
    npm: 'https://www.npmjs.com/package/rollup-plugin-drop-console',
    website: 'https://github.com/chouchouji/rollup-plugin-drop-console',
  },
  source: {
    github: 'chouchouji/rollup-plugin-drop-console',
    npm: 'rollup-plugin-drop-console',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
