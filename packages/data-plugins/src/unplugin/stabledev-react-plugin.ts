import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stabledev/react-plugin',
  description: 'Build-time plugin for StableDev analytics - injects component tracking IDs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'analytics',
    'stabledev',
    'react',
    'plugin',
    'vite',
    'webpack',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@stabledev/react-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
