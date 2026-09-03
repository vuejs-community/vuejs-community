import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-atscript',
  description: 'Atscript: Configuration and build plugins.',
  version: '0.1.89',
  category: 'plugin',
  tags: [
    'annotations',
    'atscript',
    'esbuild-plugin',
    'rolldown-plugin',
    'rollup-plugin',
    'rspack-plugin',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/moostjs/atscript',
    npm: 'https://www.npmjs.com/package/unplugin-atscript',
  },
  stats: {
    downloads: {
      monthly: 496,
      weekly: 35,
    },
  },
})
