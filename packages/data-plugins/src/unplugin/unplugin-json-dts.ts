import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-json-dts',
  description: 'Automatically generate better typings for json files. Supports json modules',
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
  links: {
    github: 'https://github.com/flixcor/unplugin-json-dts',
    npm: 'https://www.npmjs.com/package/unplugin-json-dts',
  },
  stats: {
    downloads: {
      monthly: 131,
      weekly: 27,
    },
  },
})
