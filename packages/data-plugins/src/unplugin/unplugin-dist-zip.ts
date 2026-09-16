import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dist-zip',
  description: 'Automatically create a ZIP file after build',
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
    'transform',
  ],
  source: {
    github: 'kvoon3/unplugin-dist-zip',
    npm: 'unplugin-dist-zip',
  },
  links: {
    github: 'https://github.com/kvoon3/unplugin-dist-zip',
    npm: 'https://www.npmjs.com/package/unplugin-dist-zip',
    website: 'https://github.com/kvoon3/unplugin-dist-zip#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
