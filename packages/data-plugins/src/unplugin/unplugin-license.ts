import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-license',
  description: 'Collect OSS licenses from bundled files and output third party licenses',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rsbuild-plugin',
    'vite-plugin',
    'rollup-plugin',
    'rolldown-plugin',
    'esbuild-plugin',
  ],
  links: {
    github: 'https://github.com/ryuapp/unplugin-license',
    npm: 'https://www.npmjs.com/package/unplugin-license',
    website: 'https://github.com/ryuapp/unplugin-license#readme',
  },
  source: {
    github: 'ryuapp/unplugin-license',
    npm: 'unplugin-license',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 71,
      weekly: 19,
    },
  },
})
