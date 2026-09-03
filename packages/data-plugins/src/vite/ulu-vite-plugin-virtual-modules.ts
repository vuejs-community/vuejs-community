import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ulu/vite-plugin-virtual-modules',
  description: 'A Vite plugin to create virtual modules from loader files at build time, with support for HMR, file watching, and query parameters.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'virtual',
    'virtual-modules',
    'dynamic-modules',
    'codegen',
    'loader',
    'hmr',
    'build-time',
    'data',
    'fetch',
    'JSON',
    'SSG',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Jscherbe/vite-plugin-virtual-modules',
    npm: 'https://www.npmjs.com/package/@ulu/vite-plugin-virtual-modules',
  },
  stats: {
    downloads: {
      monthly: 138,
      weekly: 38,
    },
  },
})
