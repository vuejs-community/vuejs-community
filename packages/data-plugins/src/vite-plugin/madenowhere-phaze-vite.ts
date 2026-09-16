import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@madenowhere/phaze-vite',
  description: 'Vite/Rollup helpers for Phaze: HMR that re-mounts the changed component instead of reloading the page, plus `phazeChunks` for `manualChunks`. Use alongside @madenowhere/phaze-compile (which handles JSX → DOM compilation).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'phaze',
    'vite',
    'hmr',
    'vite-plugin',
  ],
  source: {
    github: 'madenowhere/phaze',
    npm: '@madenowhere/phaze-vite',
  },
  links: {
    github: 'https://github.com/madenowhere/phaze',
    npm: 'https://www.npmjs.com/package/@madenowhere/phaze-vite',
    website: 'https://phaze.build',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 38,
      weekly: 2,
    },
  },
})
