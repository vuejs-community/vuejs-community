import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ponte-nova',
  description: 'Bridging the gap between Node.js and Nova',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'nova',
    'nova-extension',
    'nodejs',
    'compatibility',
  ],
  links: {
    github: 'https://github.com/idleberg/ponte-nova',
    npm: 'https://www.npmjs.com/package/ponte-nova',
  },
  source: {
    github: 'idleberg/ponte-nova',
    npm: 'ponte-nova',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 156,
      weekly: 156,
    },
  },
})
