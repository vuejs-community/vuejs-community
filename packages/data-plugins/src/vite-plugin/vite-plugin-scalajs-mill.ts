import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-scalajs-mill',
  description: 'Vite plugin for integration of Scala.js and Mill build system',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'scala',
    'scala-js',
  ],
  links: {
    github: 'https://github.com/aronbergurj99/vite-plugin-scalajs-mill',
    npm: 'https://www.npmjs.com/package/vite-plugin-scalajs-mill',
    website: 'https://github.com/aronbergurj99/vite-plugin-scalajs-mill#readme',
  },
  source: {
    github: 'aronbergurj99/vite-plugin-scalajs-mill',
    npm: 'vite-plugin-scalajs-mill',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
