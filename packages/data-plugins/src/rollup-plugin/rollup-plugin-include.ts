import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-include',
  description: 'Includes a file into a source, with optional assigning it to a variable',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'include',
    'file',
    'variable',
    'javascript',
    'preprocessor',
  ],
  links: {
    github: 'https://github.com/edwardcoolson/rollup-plugin-include',
    npm: 'https://www.npmjs.com/package/rollup-plugin-include',
    website: 'https://github.com/edwardcoolson/rollup-plugin-include',
  },
  source: {
    github: 'edwardcoolson/rollup-plugin-include',
    npm: 'rollup-plugin-include',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 9,
    },
  },
})
