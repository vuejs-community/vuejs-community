import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@browsonic/build-tools',
  description: 'Bundler plugins (Vite / Webpack / Rollup / esbuild) for uploading source maps to Browsonic. Apache-2.0.',
  version: '1.2.3',
  category: 'plugin',
  tags: [
    'browsonic',
    'browsonic-build-tools',
    'sourcemap',
    'sourcemap-upload',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'javascript-error-monitoring',
    'browser-error-tracking',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Sangaibisi/browsonic-sdk',
    npm: 'https://www.npmjs.com/package/@browsonic/build-tools',
  },
  stats: {
    downloads: {
      monthly: 99,
      weekly: 21,
    },
  },
})
