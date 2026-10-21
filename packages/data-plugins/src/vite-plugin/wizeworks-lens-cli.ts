import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wizeworks/lens-cli',
  description: 'The WizeLens command line, and build plugins for Vite, webpack, and Next.js that upload browser source maps to a hub or the cloud.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'wizelens',
    'sourcemaps',
    'source maps',
    'vite-plugin',
    'webpack-plugin',
    'nextjs',
    'cli',
  ],
  links: {
    github: 'https://github.com/brandonkorous/wizelens',
    npm: 'https://www.npmjs.com/package/@wizeworks/lens-cli',
    website: 'https://github.com/brandonkorous/wizelens#readme',
  },
  source: {
    github: 'brandonkorous/wizelens',
    npm: '@wizeworks/lens-cli',
  },
})
