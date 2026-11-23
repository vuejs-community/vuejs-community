import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@deepmetier/vitejs-plugin-react',
  description: 'The default Vite plugin for React projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'babel',
    'react-refresh',
    'fast refresh',
  ],
  links: {
    github: 'https://github.com/vitejs/vite-plugin-react',
    npm: 'https://www.npmjs.com/package/@deepmetier/vitejs-plugin-react',
    website: 'https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#readme',
  },
  source: {
    github: 'vitejs/vite-plugin-react',
    npm: '@deepmetier/vitejs-plugin-react',
  },
})
