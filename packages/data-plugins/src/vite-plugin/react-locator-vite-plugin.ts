import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-locator-vite-plugin',
  description: 'Tags JSX with source-location data at build time, for click-to-open-in-editor tooling that works on React 19 (where fiber._debugSource no longer exists). Companion to the React Locator Chrome extension.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'devtools',
    'vscode',
  ],
  links: {
    github: 'https://github.com/kunalkarpe/React-Locator',
    npm: 'https://www.npmjs.com/package/react-locator-vite-plugin',
    website: 'https://github.com/kunalkarpe/React-Locator#readme',
  },
  source: {
    github: 'kunalkarpe/React-Locator',
    npm: 'react-locator-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 64,
      weekly: 5,
    },
  },
})
