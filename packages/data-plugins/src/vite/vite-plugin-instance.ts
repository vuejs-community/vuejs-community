import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-instance',
  description: 'Vite integration for the Instance framework — boot-attribute script injection, .is file compilation through the real Instance Compiler, and the virtual:instance IVC module.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'instance',
    'dom',
    'signals',
    'no-build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-instance',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 0,
    },
  },
})
