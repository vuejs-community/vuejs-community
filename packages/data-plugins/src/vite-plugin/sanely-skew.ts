import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sanely/skew',
  description: 'Keep your deployments fresh',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'deployment',
    'react-hook',
    'stale-client',
    'version-skew',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/adelrodriguez/sanely',
    npm: 'https://www.npmjs.com/package/@sanely/skew',
    website: 'https://github.com/adelrodriguez/sanely/tree/main/packages/skew#readme',
  },
  source: {
    github: 'adelrodriguez/sanely',
    npm: '@sanely/skew',
  },
})
