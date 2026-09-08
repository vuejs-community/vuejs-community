import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-build-zip',
  description: 'Zip your build files with JSZip, powered by unplugin',
  icon: 'icon:dark-unplugin',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'zip',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'wip-elonehoo/unplugin-zip',
    npm: 'unplugin-build-zip',
  },
  links: {
    github: 'https://github.com/wip-elonehoo/unplugin-zip',
    npm: 'https://www.npmjs.com/package/unplugin-build-zip',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
