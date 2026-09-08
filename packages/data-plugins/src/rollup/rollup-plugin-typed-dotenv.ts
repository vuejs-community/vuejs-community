import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typed-dotenv',
  description: 'When this plug-in replaces code with environment variables, it converts to an appropriate form according to the plugin settings.',
  icon: 'logos:rollupjs',
  version: '1.1.3',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'dotenv',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mato533/rollup-plugin-typed-dotenv',
    npm: 'rollup-plugin-typed-dotenv',
  },
  links: {
    github: 'https://github.com/mato533/rollup-plugin-typed-dotenv',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typed-dotenv',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 17,
    },
  },
})
