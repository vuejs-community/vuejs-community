import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xlens/plugin',
  description: 'Build plugin (Vite/webpack/Rollup/esbuild) that maps every interactive element to its source, plus the app scanner.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'xlens',
    'product-analytics',
    'ux',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/supreeth-kashyap/xlens',
    npm: 'https://www.npmjs.com/package/@xlens/plugin',
    website: 'https://xlens.dev',
  },
  source: {
    github: 'supreeth-kashyap/xlens',
    npm: '@xlens/plugin',
  },
})
