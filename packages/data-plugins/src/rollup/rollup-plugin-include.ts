import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-include',
  description: 'Includes a file into a source, with optional assigning it to a variable',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'include',
    'file',
    'variable',
    'javascript',
    'preprocessor',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'edwardcoolson/rollup-plugin-include',
    npm: 'rollup-plugin-include',
  },
  links: {
    github: 'https://github.com/edwardcoolson/rollup-plugin-include',
    npm: 'https://www.npmjs.com/package/rollup-plugin-include',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
