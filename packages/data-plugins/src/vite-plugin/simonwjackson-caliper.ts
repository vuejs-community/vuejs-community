import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@simonwjackson/caliper',
  description: 'A dev-only Vite plugin that renders a project\'s own UI parts at true physical device size.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'devtools',
    'design',
    'true-size',
  ],
  links: {
    github: 'https://github.com/simonwjackson/caliper',
    npm: 'https://www.npmjs.com/package/@simonwjackson/caliper',
    website: 'https://github.com/simonwjackson/caliper#readme',
  },
  source: {
    github: 'simonwjackson/caliper',
    npm: '@simonwjackson/caliper',
  },
})
