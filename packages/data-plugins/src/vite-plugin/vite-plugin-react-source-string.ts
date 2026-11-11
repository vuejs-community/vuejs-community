import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-source-string',
  description: 'Native Vite plugin that adds data-source="path:line" attributes to JSX elements (React/UI components and HTML elements) for debugging',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'jsx',
    'data-source',
    'debug',
  ],
  links: {
    github: 'https://github.com/tanchu/vite-plugin-react-source',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-source-string',
    website: 'https://github.com/tanchu/vite-plugin-react-source#readme',
  },
  source: {
    github: 'tanchu/vite-plugin-react-source',
    npm: 'vite-plugin-react-source-string',
  },
})
