import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'plugin-include',
  description: 'Tiny Rollup-compatible plugin that includes extra files (types, README, LICENSE, ...) in the build output.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'rolldown',
    'esbuild',
    'include',
    'copy',
    'assets',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jayf0x/plugin-include',
    npm: 'https://www.npmjs.com/package/plugin-include',
  },
  stats: {
    downloads: {
      monthly: 70,
      weekly: 7,
    },
  },
})
