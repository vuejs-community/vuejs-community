import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-locator-vite-plugin',
  description: 'Tags JSX with source-location data at build time, for click-to-open-in-editor tooling that works on React 19 (where fiber._debugSource no longer exists). Companion to the React Locator Chrome extension.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'devtools',
    'vscode',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kunalkarpe/React-Locator',
    npm: 'https://www.npmjs.com/package/react-locator-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 51,
      weekly: 14,
    },
  },
})
