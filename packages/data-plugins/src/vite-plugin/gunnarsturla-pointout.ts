import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gunnarsturla/pointout',
  description: 'Pick an element in the running app, type a request about it, and have it reach the Claude Code session you are already working in.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'nextjs',
    'claude',
    'claude-code',
    'devtools',
    'react',
    'inspector',
  ],
  links: {
    github: 'https://github.com/GunnarSturla/pointout',
    npm: 'https://www.npmjs.com/package/@gunnarsturla/pointout',
    website: 'https://github.com/GunnarSturla/pointout#readme',
  },
  source: {
    github: 'GunnarSturla/pointout',
    npm: '@gunnarsturla/pointout',
  },
})
