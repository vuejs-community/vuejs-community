import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-glob-stable',
  description: 'Keep Vite glob module hashes out of application bundles with an external manifest.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'glob',
    'manifest',
    'cache',
    'dynamic-import',
  ],
  links: {
    github: 'https://github.com/6iedog/vite-glob-stable',
    npm: 'https://www.npmjs.com/package/vite-glob-stable',
    website: 'https://github.com/6iedog/vite-glob-stable#readme',
  },
  source: {
    github: '6iedog/vite-glob-stable',
    npm: 'vite-glob-stable',
  },
})
