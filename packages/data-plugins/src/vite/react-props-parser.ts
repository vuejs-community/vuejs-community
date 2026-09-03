import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-props-parser',
  description: 'TypeScript-aware React props parser: expands discriminated unions, unions of objects, and nested object props into structured data (via the TypeScript compiler API) instead of stringifying types like react-docgen-typescript does. Ships with a Vite plugin ',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'react',
    'docgen',
    'react-docgen',
    'typescript',
    'storybook',
    'props',
    'documentation',
    'vite-plugin',
    'webpack-loader',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/turalowski/react-props-parser',
    npm: 'https://www.npmjs.com/package/react-props-parser',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
