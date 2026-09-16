import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@browsonic/build-tools',
  description: 'Bundler plugins (Vite / Webpack / Rollup / esbuild) for uploading source maps to Browsonic. Apache-2.0.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Sangaibisi/browsonic-sdk',
    npm: '@browsonic/build-tools',
  },
  links: {
    github: 'https://github.com/Sangaibisi/browsonic-sdk',
    npm: 'https://www.npmjs.com/package/@browsonic/build-tools',
    website: 'https://github.com/Sangaibisi/browsonic-sdk/tree/main/packages/build-tools#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 383,
      weekly: 335,
    },
  },
})
