import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stabledev/react-plugin',
  description: 'Build-time plugin for StableDev analytics - injects component tracking IDs',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'analytics',
    'stabledev',
    'react',
    'plugin',
    'vite',
    'webpack',
    'unplugin',
  ],
  source: {
    npm: '@stabledev/react-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@stabledev/react-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
