import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-build-stamp',
  description: 'Inject git hash, package version and build time into your app as a constant, powered by unplugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'webpack',
    'git',
    'hash',
    'version',
    'build-info',
    'define',
  ],
  links: {
    github: 'https://github.com/imba97/unplugin-build-stamp',
    npm: 'https://www.npmjs.com/package/unplugin-build-stamp',
    website: 'https://github.com/imba97/unplugin-build-stamp#readme',
  },
  source: {
    github: 'imba97/unplugin-build-stamp',
    npm: 'unplugin-build-stamp',
  },
})
