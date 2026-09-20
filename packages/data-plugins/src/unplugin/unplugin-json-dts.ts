import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-json-dts',
  description: 'Automatically generate better typings for json files. Supports json modules',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'json',
    'vite',
    'unplugin',
    'plugin',
    'typescript',
    'rollup',
    'webpack',
  ],
  links: {
    github: 'https://github.com/flixcor/unplugin-json-dts',
    npm: 'https://www.npmjs.com/package/unplugin-json-dts',
    website: 'https://github.com/flixcor/unplugin-json-dts#readme',
  },
  source: {
    github: 'flixcor/unplugin-json-dts',
    npm: 'unplugin-json-dts',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 102,
      weekly: 25,
    },
  },
})
