import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-build-zip',
  description: 'Zip your build files with JSZip, powered by unplugin',
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
    'zip',
  ],
  links: {
    github: 'https://github.com/wip-elonehoo/unplugin-zip',
    npm: 'https://www.npmjs.com/package/unplugin-build-zip',
    website: 'https://github.com/wip-elonehoo/unplugin-zip#readme',
  },
  source: {
    github: 'wip-elonehoo/unplugin-zip',
    npm: 'unplugin-build-zip',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
