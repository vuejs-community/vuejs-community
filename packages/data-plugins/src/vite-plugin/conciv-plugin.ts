import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@conciv/plugin',
  description: 'Internal to @conciv/it (installed automatically, do not install directly). The conciv dev agent as an unplugin: vite (full: viteBridge + widget middleware + boot), webpack/rspack (boot the engine), rollup/esbuild (build-only no-ops). One factory, per-bund',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'conciv',
    'esbuild',
    'nextjs',
    'rollup',
    'rspack',
    'vite-plugin',
    'webpack',
  ],
  links: {
    github: 'https://github.com/conciv-dev/conciv',
    npm: 'https://www.npmjs.com/package/@conciv/plugin',
    website: 'https://conciv.dev',
  },
  source: {
    github: 'conciv-dev/conciv',
    npm: '@conciv/plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 236,
      weekly: 7,
    },
  },
})
