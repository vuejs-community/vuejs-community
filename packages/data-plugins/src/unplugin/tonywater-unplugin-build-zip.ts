import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tonywater/unplugin-build-zip',
  description: 'An unplugin that zips the build output directory after a successful build',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'build',
    'zip',
  ],
  source: {
    github: 'DaYePython/unplugin-build-zip',
    npm: '@tonywater/unplugin-build-zip',
  },
  links: {
    github: 'https://github.com/DaYePython/unplugin-build-zip',
    npm: 'https://www.npmjs.com/package/@tonywater/unplugin-build-zip',
    website: 'https://github.com/DaYePython/unplugin-build-zip#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
