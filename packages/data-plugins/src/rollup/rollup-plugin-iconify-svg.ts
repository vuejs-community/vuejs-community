import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-iconify-svg',
  description: 'A rollup plugin to autogenerate svg markup from iconify references in your svelte project',
  icon: 'logos:rollupjs',
  version: '2.2.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'svg',
    'iconify',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Swiftaff/rollup-plugin-iconify-svg',
    npm: 'rollup-plugin-iconify-svg',
  },
  links: {
    github: 'https://github.com/Swiftaff/rollup-plugin-iconify-svg',
    npm: 'https://www.npmjs.com/package/rollup-plugin-iconify-svg',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
