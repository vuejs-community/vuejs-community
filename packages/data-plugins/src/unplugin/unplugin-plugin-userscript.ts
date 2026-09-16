import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-plugin-userscript',
  description: 'Unplugin plugins for userscript engines',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'plugin',
    'userscript',
    'tampermonkey',
    'greasymonkey',
    'violentmonkey',
  ],
  source: {
    github: 'EnergoStalin/unplugin-plugin-userscript',
    npm: 'unplugin-plugin-userscript',
  },
  links: {
    github: 'https://github.com/EnergoStalin/unplugin-plugin-userscript',
    npm: 'https://www.npmjs.com/package/unplugin-plugin-userscript',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
