import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tw-plugin-rollup',
  description: 'Bundle a multi-file TurboWarp/Scratch extension into a single unsandboxed-extension file with Rollup, Rolldown, or Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/playforge-coding/scratch4js',
    npm: 'https://www.npmjs.com/package/tw-plugin-rollup',
    website: 'https://github.com/playforge-coding/scratch4js/tree/main/packages/tw-plugin-rollup#readme',
  },
  source: {
    github: 'playforge-coding/scratch4js',
    npm: 'tw-plugin-rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 45,
      weekly: 19,
    },
  },
})
