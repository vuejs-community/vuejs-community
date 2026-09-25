import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hebilicious/cssforge-unplugin',
  description: 'Bundler plugin that generates CSS Forge design-token output inside the build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unplugin',
    'cssforge',
    'design-tokens',
    'css-variables',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'esbuild-plugin',
  ],
  links: {
    github: 'https://github.com/Hebilicious/cssforge',
    npm: 'https://www.npmjs.com/package/@hebilicious/cssforge-unplugin',
    website: 'https://cssforge.hebilicious.workers.dev',
  },
  source: {
    github: 'Hebilicious/cssforge',
    npm: '@hebilicious/cssforge-unplugin',
  },
})
