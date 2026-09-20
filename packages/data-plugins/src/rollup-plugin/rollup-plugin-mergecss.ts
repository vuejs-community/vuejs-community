import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mergecss',
  description: 'A plugin to combine all your CSS files into one and optionally remove the references to the old files from your HTML pages.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'minifier',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-mergecss',
    website: 'https://next.ernestbadu.me',
  },
  source: {
    npm: 'rollup-plugin-mergecss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 71,
      weekly: 4,
    },
  },
})
