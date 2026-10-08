import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'electron-gpui-unplugin',
  description: 'Vite/Rollup/Rolldown/webpack/esbuild plugin that builds and bundles your electron-gpui addon',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'electron',
    'gpui',
    'unplugin',
    'vite',
    'rollup',
    'rolldown',
    'webpack',
    'esbuild',
    'tsdown',
  ],
  links: {
    github: 'https://github.com/biw/electron-gpui',
    npm: 'https://www.npmjs.com/package/electron-gpui-unplugin',
    website: 'https://github.com/biw/electron-gpui#readme',
  },
  source: {
    github: 'biw/electron-gpui',
    npm: 'electron-gpui-unplugin',
  },
})
