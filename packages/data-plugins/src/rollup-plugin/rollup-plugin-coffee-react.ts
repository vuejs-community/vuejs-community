import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-coffee-react',
  description: 'Rollup plugin to transpile .coffee and .cjsx files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'cjsx',
    'coffeescript',
  ],
  source: {
    github: 'N1kto/rollup-plugin-coffee-react',
    npm: 'rollup-plugin-coffee-react',
  },
  links: {
    github: 'https://github.com/N1kto/rollup-plugin-coffee-react',
    npm: 'https://www.npmjs.com/package/rollup-plugin-coffee-react',
    website: 'https://github.com/N1kto/rollup-plugin-coffee-react#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
