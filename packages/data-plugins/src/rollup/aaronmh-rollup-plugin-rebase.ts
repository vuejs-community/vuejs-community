import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aaronmh/rollup-plugin-rebase',
  description: 'The Rollup Rebase Plugin copies static assets as required from your JavaScript code to the destination folder and adjusts the references in there to point to the new location. Forked from rollup-plugin-rebase',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'file',
    'assets',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/aaronhargrove-grub/rollup-plugin-rebase',
    npm: 'https://www.npmjs.com/package/@aaronmh/rollup-plugin-rebase',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 2,
    },
  },
})
