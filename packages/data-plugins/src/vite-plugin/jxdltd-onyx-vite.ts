import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jxdltd/onyx-vite',
  description: 'Vite plugin for products built on Onyx: typed options, a virtual config module, and a build-time codegen hook.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'onyx',
    'plugin',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/onyx',
    npm: 'https://www.npmjs.com/package/@jxdltd/onyx-vite',
    website: 'https://github.com/jamiedavenport/onyx/tree/main/published/vite#readme',
  },
  source: {
    github: 'jamiedavenport/onyx',
    npm: '@jxdltd/onyx-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
