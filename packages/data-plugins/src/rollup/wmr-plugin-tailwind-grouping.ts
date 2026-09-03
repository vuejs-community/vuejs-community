import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'wmr-plugin-tailwind-grouping',
  description: 'WMR plugin to expand grouped Tailwind utility classes',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'tailwind',
    'tailwindcss',
    'twind',
    'class',
    'classes',
    'groups',
    'grouping',
    'wmr',
    'wmr-plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rschristian/tailwind-grouping',
    npm: 'https://www.npmjs.com/package/wmr-plugin-tailwind-grouping',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
