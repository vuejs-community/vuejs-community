import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-props-parser',
  description: 'TypeScript-aware React props parser: expands discriminated unions, unions of objects, and nested object props into structured data (via the TypeScript compiler API) instead of stringifying types like react-docgen-typescript does. Ships with a Vite plugin ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/turalowski/react-props-parser',
    npm: 'https://www.npmjs.com/package/react-props-parser',
    website: 'https://github.com/turalowski/react-props-parser#readme',
  },
  source: {
    github: 'turalowski/react-props-parser',
    npm: 'react-props-parser',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 143,
      weekly: 9,
    },
  },
})
