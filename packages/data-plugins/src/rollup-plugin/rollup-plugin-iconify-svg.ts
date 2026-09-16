import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-iconify-svg',
  description: 'A rollup plugin to autogenerate svg markup from iconify references in your svelte project',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'svg',
    'iconify',
  ],
  source: {
    github: 'Swiftaff/rollup-plugin-iconify-svg',
    npm: 'rollup-plugin-iconify-svg',
  },
  links: {
    github: 'https://github.com/Swiftaff/rollup-plugin-iconify-svg',
    npm: 'https://www.npmjs.com/package/rollup-plugin-iconify-svg',
    website: 'https://github.com/Swiftaff/rollup-plugin-iconify-svg#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
