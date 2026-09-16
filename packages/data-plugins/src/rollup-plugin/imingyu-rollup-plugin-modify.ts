import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'imingyu-rollup-plugin-modify',
  description: 'Modify rollup output with find / replace dynamically',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'replace',
  ],
  source: {
    github: 'imingyu/rollup-plugin-modify',
    npm: 'imingyu-rollup-plugin-modify',
  },
  links: {
    github: 'https://github.com/imingyu/rollup-plugin-modify',
    npm: 'https://www.npmjs.com/package/imingyu-rollup-plugin-modify',
    website: 'https://github.com/imingyu/rollup-plugin-modify#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
