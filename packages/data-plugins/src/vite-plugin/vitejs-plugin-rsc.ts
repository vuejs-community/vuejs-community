import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-rsc',
  description: 'React Server Components (RSC) support for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'react-server-components',
    'rsc',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'vitejs/vite-plugin-react',
    npm: '@vitejs/plugin-rsc',
  },
  links: {
    github: 'https://github.com/vitejs/vite-plugin-react',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-rsc',
    website: 'https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5863471,
      weekly: 1216862,
    },
  },
})
