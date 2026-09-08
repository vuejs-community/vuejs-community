import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-phecda-server',
  description: 'unplugin that use phecda-server loader in bundler',
  icon: 'icon:dark-unplugin',
  version: '1.0.8',
  category: 'plugin',
  tags: [
    'phecda-server',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'fgsreally/unplugin-phecda-server',
    npm: 'unplugin-phecda-server',
  },
  links: {
    github: 'https://github.com/fgsreally/unplugin-phecda-server',
    npm: 'https://www.npmjs.com/package/unplugin-phecda-server',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 8,
    },
  },
})
