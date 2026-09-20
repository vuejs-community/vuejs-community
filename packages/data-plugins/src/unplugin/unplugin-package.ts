import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-package',
  description: 'Bundler plugins for copying manifest files into output.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'bundler',
    'build-script',
    'publish',
    'pack',
  ],
  links: {
    github: 'https://github.com/aprosail/unplugin-package',
    npm: 'https://www.npmjs.com/package/unplugin-package',
    website: 'https://github.com/aprosail/unplugin-package#readme',
  },
  source: {
    github: 'aprosail/unplugin-package',
    npm: 'unplugin-package',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
