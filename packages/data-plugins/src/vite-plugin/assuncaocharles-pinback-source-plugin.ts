import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@assuncaocharles/pinback-source-plugin',
  description: 'Vite plugin that tags JSX elements with data-pp-src so pinback comments land on the right file and line.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'jsx',
    'react',
    'github',
    'code-review',
  ],
  links: {
    github: 'https://github.com/assuncaocharles/pinback',
    npm: 'https://www.npmjs.com/package/@assuncaocharles/pinback-source-plugin',
    website: 'https://assuncaocharles.github.io/pinback/',
  },
  source: {
    github: 'assuncaocharles/pinback',
    npm: '@assuncaocharles/pinback-source-plugin',
  },
})
