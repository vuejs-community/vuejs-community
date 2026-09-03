import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jxdltd/onyx-vite',
  description: 'Vite plugin for products built on Onyx: typed options, a virtual config module, and a build-time codegen hook.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'onyx',
    'plugin',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/onyx',
    npm: 'https://www.npmjs.com/package/@jxdltd/onyx-vite',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 6,
    },
  },
})
