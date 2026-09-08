import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-package',
  description: 'Bundler plugins for copying manifest files into output.',
  icon: 'icon:dark-unplugin',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'bundler',
    'build-script',
    'publish',
    'pack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'aprosail/unplugin-package',
    npm: 'unplugin-package',
  },
  links: {
    github: 'https://github.com/aprosail/unplugin-package',
    npm: 'https://www.npmjs.com/package/unplugin-package',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
