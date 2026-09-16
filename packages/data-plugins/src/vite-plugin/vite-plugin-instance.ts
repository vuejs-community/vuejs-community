import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-instance',
  description: 'Vite integration for the Instance framework — boot-attribute script injection, .is file compilation through the real Instance Compiler, and the virtual:instance IVC module.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'instance',
    'dom',
    'signals',
    'no-build',
  ],
  source: {
    npm: 'vite-plugin-instance',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-instance',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
