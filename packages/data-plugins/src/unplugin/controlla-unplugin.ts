import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'controlla-unplugin',
  description: 'Rewrites controlla\'s proxy-backed control scopes into direct calls at build time',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'metro',
    'react-native',
    'controlla',
    'proxy',
  ],
  source: {
    github: 'Krombik/controlla-unplugin',
    npm: 'controlla-unplugin',
  },
  links: {
    github: 'https://github.com/Krombik/controlla-unplugin',
    npm: 'https://www.npmjs.com/package/controlla-unplugin',
    website: 'https://github.com/Krombik/controlla-unplugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
