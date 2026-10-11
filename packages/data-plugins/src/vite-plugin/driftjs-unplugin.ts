import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'driftjs-unplugin',
  description: 'Universal build-tool plugin for DriftJS (.drift) Single File Components supporting Vite, Rollup, Webpack, esbuild, and Rspack.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'driftjs',
    'unplugin',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'esbuild-plugin',
    'rspack-plugin',
    'compiler',
    'aot',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/driftjs-unplugin',
  },
  source: {
    npm: 'driftjs-unplugin',
  },
})
