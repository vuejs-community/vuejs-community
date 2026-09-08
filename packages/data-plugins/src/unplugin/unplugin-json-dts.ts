import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-json-dts',
  description: 'Automatically generate better typings for json files. Supports json modules',
  icon: 'icon:dark-unplugin',
  version: '1.3.2',
  category: 'plugin',
  tags: [
    'json',
    'vite',
    'unplugin',
    'plugin',
    'typescript',
    'rollup',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'flixcor/unplugin-json-dts',
    npm: 'unplugin-json-dts',
  },
  links: {
    github: 'https://github.com/flixcor/unplugin-json-dts',
    npm: 'https://www.npmjs.com/package/unplugin-json-dts',
  },
  stats: {
    downloads: {
      monthly: 129,
      weekly: 24,
    },
  },
})
