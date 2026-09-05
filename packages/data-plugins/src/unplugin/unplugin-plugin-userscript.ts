import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-plugin-userscript',
  description: 'Unplugin plugins for userscript engines',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'plugin',
    'userscript',
    'tampermonkey',
    'greasymonkey',
    'violentmonkey',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/EnergoStalin/unplugin-plugin-userscript',
    npm: 'https://www.npmjs.com/package/unplugin-plugin-userscript',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
