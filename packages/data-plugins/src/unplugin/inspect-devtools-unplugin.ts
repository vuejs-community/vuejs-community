import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inspect-devtools/unplugin',
  description: 'Unified unplugin for Inspect Devtools supporting Vite, Webpack, Rspack, Rollup, and Esbuild.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'devtools',
    'inspector',
    'source-location',
  ],
  links: {
    github: 'https://github.com/reeswell/inspect-devtools',
    npm: 'https://www.npmjs.com/package/@inspect-devtools/unplugin',
    website: 'https://github.com/reeswell/inspect-devtools#readme',
  },
  source: {
    github: 'reeswell/inspect-devtools',
    npm: '@inspect-devtools/unplugin',
  },
})
