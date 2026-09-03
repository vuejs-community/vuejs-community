import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'solid-jotlang',
  description: 'JOTLANG on top of SolidJS — Vite plugin that compiles .jot files to reactive Solid components.',
  version: '0.6.4',
  category: 'plugin',
  tags: [
    'jotlang',
    'jotl',
    'solid',
    'solidjs',
    'vite',
    'vite-plugin',
    'jsx',
    'compiler',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Thaumonaut/jotl-project',
    npm: 'https://www.npmjs.com/package/solid-jotlang',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 0,
    },
  },
})
