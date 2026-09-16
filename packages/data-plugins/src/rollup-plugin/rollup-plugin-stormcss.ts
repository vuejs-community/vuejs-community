import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stormcss',
  description: 'Storm CSS for Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'stormcss',
    'tailwindcss',
  ],
  source: {
    github: 'stormcss-dev/wite-plugin-stormcss',
    npm: 'rollup-plugin-stormcss',
  },
  links: {
    github: 'https://github.com/stormcss-dev/wite-plugin-stormcss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stormcss',
    website: 'https://github.com/stormcss-dev/wite-plugin-stormcss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
