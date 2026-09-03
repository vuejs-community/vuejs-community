import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-license',
  description: 'Collect OSS licenses from bundled files and output third party licenses',
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
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ryuapp/unplugin-license',
    npm: 'https://www.npmjs.com/package/unplugin-license',
  },
  stats: {
    downloads: {
      monthly: 226,
      weekly: 8,
    },
  },
})
