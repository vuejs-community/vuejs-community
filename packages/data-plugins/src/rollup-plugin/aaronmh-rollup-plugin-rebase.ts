import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aaronmh/rollup-plugin-rebase',
  description: 'The Rollup Rebase Plugin copies static assets as required from your JavaScript code to the destination folder and adjusts the references in there to point to the new location. Forked from rollup-plugin-rebase',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'file',
    'assets',
  ],
  links: {
    github: 'https://github.com/aaronhargrove-grub/rollup-plugin-rebase',
    npm: 'https://www.npmjs.com/package/@aaronmh/rollup-plugin-rebase',
    website: 'https://github.com/aaronhargrove-grub/rollup-plugin-rebase#readme',
  },
  source: {
    github: 'aaronhargrove-grub/rollup-plugin-rebase',
    npm: '@aaronmh/rollup-plugin-rebase',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 5,
    },
  },
})
