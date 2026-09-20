import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-gettext',
  description: 'Rollup loader for PO and MO files via gettext-parser',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'gettext',
  ],
  links: {
    github: 'https://github.com/kemdict/gettext',
    npm: 'https://www.npmjs.com/package/rollup-plugin-gettext',
    website: 'https://github.com/kemdict/gettext#readme',
  },
  source: {
    github: 'kemdict/gettext',
    npm: 'rollup-plugin-gettext',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
