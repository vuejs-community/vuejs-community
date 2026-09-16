import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wmr-plugin-tailwind-grouping',
  description: 'WMR plugin to expand grouped Tailwind utility classes',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'rschristian/tailwind-grouping',
    npm: 'wmr-plugin-tailwind-grouping',
  },
  links: {
    github: 'https://github.com/rschristian/tailwind-grouping',
    npm: 'https://www.npmjs.com/package/wmr-plugin-tailwind-grouping',
    website: 'https://github.com/rschristian/tailwind-grouping#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
