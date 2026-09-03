import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@conciv/plugin',
  description: 'Internal to @conciv/it (installed automatically, do not install directly). The conciv dev agent as an unplugin: vite (full: viteBridge + widget middleware + boot), webpack/rspack (boot the engine), rollup/esbuild (build-only no-ops). One factory, per-bund',
  version: '0.0.19',
  category: 'plugin',
  tags: [
    'conciv',
    'esbuild',
    'nextjs',
    'rollup',
    'rspack',
    'vite-plugin',
    'webpack',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/conciv-dev/conciv',
    npm: 'https://www.npmjs.com/package/@conciv/plugin',
  },
  stats: {
    downloads: {
      monthly: 669,
      weekly: 26,
    },
  },
})
