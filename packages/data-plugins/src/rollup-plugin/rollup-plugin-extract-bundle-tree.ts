import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-extract-bundle-tree',
  description: 'Rollup plugin to export the rollup bundle tree to a JSON file',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'bundle',
  ],
  source: {
    github: 'domingues/rollup-plugin-extract-bundle-tree',
    npm: 'rollup-plugin-extract-bundle-tree',
  },
  links: {
    github: 'https://github.com/domingues/rollup-plugin-extract-bundle-tree',
    npm: 'https://www.npmjs.com/package/rollup-plugin-extract-bundle-tree',
    website: 'https://github.com/domingues/rollup-plugin-extract-bundle-tree',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 356,
      weekly: 50,
    },
  },
})
