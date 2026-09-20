import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-executable-script',
  description: 'A plugin to tell system to use node interpreter and provide executable permissions to the output file.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'executable',
    'script',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-executable-script',
    website: 'https://github.com/Thejus-Paul/rollup-plugin-executable-script',
  },
  source: {
    npm: 'rollup-plugin-executable-script',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 3,
    },
  },
})
