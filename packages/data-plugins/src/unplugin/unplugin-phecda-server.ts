import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-phecda-server',
  description: 'unplugin that use phecda-server loader in bundler',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'phecda-server',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/fgsreally/unplugin-phecda-server',
    npm: 'https://www.npmjs.com/package/unplugin-phecda-server',
    website: 'https://github.com/fgsreally/unplugin-phecda-server#readme',
  },
  source: {
    github: 'fgsreally/unplugin-phecda-server',
    npm: 'unplugin-phecda-server',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
