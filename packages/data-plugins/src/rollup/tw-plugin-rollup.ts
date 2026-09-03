import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'tw-plugin-rollup',
  description: 'Bundle a multi-file TurboWarp/Scratch extension into a single unsandboxed-extension file with Rollup, Rolldown, or Vite.',
  version: '1.2.4',
  category: 'plugin',
  tags: [
    'turbowarp',
    'scratch',
    'extension',
    'rollup',
    'rollup-plugin',
    'rolldown',
    'vite',
    'vite-plugin',
    'bundler',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/playforge-coding/scratch4js',
    npm: 'https://www.npmjs.com/package/tw-plugin-rollup',
  },
  stats: {
    downloads: {
      monthly: 52,
      weekly: 6,
    },
  },
})
