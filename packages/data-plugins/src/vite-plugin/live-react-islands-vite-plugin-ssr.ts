import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@live-react-islands/vite-plugin-ssr',
  description: 'Vite plugin for LiveReactIslands SSR development server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssr',
    'liveview',
    'react',
    'islands',
  ],
  links: {
    github: 'https://github.com/dcza/live-react-islands',
    npm: 'https://www.npmjs.com/package/@live-react-islands/vite-plugin-ssr',
    website: 'https://github.com/dcza/live-react-islands#readme',
  },
  source: {
    github: 'dcza/live-react-islands',
    npm: '@live-react-islands/vite-plugin-ssr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
