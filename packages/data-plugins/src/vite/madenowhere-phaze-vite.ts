import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@madenowhere/phaze-vite',
  description: 'Vite/Rollup helpers for Phaze: HMR that re-mounts the changed component instead of reloading the page, plus `phazeChunks` for `manualChunks`. Use alongside @madenowhere/phaze-compile (which handles JSX → DOM compilation).',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'phaze',
    'vite',
    'hmr',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/madenowhere/phaze',
    npm: 'https://www.npmjs.com/package/@madenowhere/phaze-vite',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 14,
    },
  },
})
