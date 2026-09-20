import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plexinc/vite-plugin-react-native-lightning',
  description: 'Vite plugin for adding react-native-lightning support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react-native',
    'lightning-js',
  ],
  links: {
    github: 'https://github.com/plexinc/react-lightning',
    npm: 'https://www.npmjs.com/package/@plexinc/vite-plugin-react-native-lightning',
    website: 'https://github.com/plexinc/react-lightning#readme',
  },
  source: {
    github: 'plexinc/react-lightning',
    npm: '@plexinc/vite-plugin-react-native-lightning',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
