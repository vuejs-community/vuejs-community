import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'plugin-include',
  description: 'Tiny Rollup-compatible plugin that includes extra files (types, README, LICENSE, ...) in the build output.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'jayf0x/plugin-include',
    npm: 'plugin-include',
  },
  links: {
    github: 'https://github.com/jayf0x/plugin-include',
    npm: 'https://www.npmjs.com/package/plugin-include',
    website: 'https://github.com/jayf0x/plugin-include#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 4,
    },
  },
})
