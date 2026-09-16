import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plextv/vite-plugin-react-native-lightning',
  description: 'Vite plugin for adding react-native-lightning support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lightning-js',
    'react-native',
    'vite-plugin',
  ],
  source: {
    github: 'plexinc/react-lightning',
    npm: '@plextv/vite-plugin-react-native-lightning',
  },
  links: {
    github: 'https://github.com/plexinc/react-lightning',
    npm: 'https://www.npmjs.com/package/@plextv/vite-plugin-react-native-lightning',
    website: 'https://github.com/plexinc/react-lightning#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7369,
      weekly: 321,
    },
  },
})
