import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@open-probe/unplugin',
  description: 'Build-tool plugin (Vite/Webpack/Rspack/esbuild) that injects the open-probe runtime in development mode.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'open-probe',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'esbuild-plugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wzc520pyfm/open-probe',
    npm: 'https://www.npmjs.com/package/@open-probe/unplugin',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 8,
    },
  },
})
