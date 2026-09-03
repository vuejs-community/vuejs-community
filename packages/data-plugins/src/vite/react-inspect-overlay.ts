import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-inspect-overlay',
  description: 'A Vue-DevTools-style component inspector for React — hover the page to highlight components, click to jump to their source. Works with both legacy ReactDOM.render and React 18/19 createRoot.',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'react',
    'devtools',
    'inspector',
    'inspect',
    'vite-plugin',
    'open-in-editor',
    'fiber',
    'dx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/react-inspect-overlay',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 9,
    },
  },
})
