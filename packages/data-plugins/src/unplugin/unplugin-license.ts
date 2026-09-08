import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-license',
  description: 'Collect OSS licenses from bundled files and output third party licenses',
  icon: 'icon:dark-unplugin',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'rsbuild-plugin',
    'vite-plugin',
    'rollup-plugin',
    'rolldown-plugin',
    'esbuild-plugin',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'ryuapp/unplugin-license',
    npm: 'unplugin-license',
  },
  links: {
    github: 'https://github.com/ryuapp/unplugin-license',
    npm: 'https://www.npmjs.com/package/unplugin-license',
  },
  stats: {
    downloads: {
      monthly: 224,
      weekly: 8,
    },
  },
})
