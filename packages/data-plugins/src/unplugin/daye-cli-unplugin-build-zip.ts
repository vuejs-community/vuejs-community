import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@daye-cli/unplugin-build-zip',
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
    npm: '@daye-cli/unplugin-build-zip',
  },
  links: {
    github: 'https://github.com/DaYePython/unplugin-build-zip',
    npm: 'https://www.npmjs.com/package/@daye-cli/unplugin-build-zip',
    website: 'https://github.com/DaYePython/unplugin-build-zip#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 34,
      weekly: 7,
    },
  },
})
