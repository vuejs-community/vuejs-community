import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@markdown-di/vite',
  description: 'Vite plugin for markdown-di - import .md files as typed, strict render functions, typed data, or collections',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'markdown',
    'vite',
    'vite-plugin',
    'frontmatter',
    'prompts',
    'data',
  ],
  links: {
    github: 'https://github.com/PepijnSenders/markdown-di',
    npm: 'https://www.npmjs.com/package/@markdown-di/vite',
    website: 'https://github.com/PepijnSenders/markdown-di#readme',
  },
  source: {
    github: 'PepijnSenders/markdown-di',
    npm: '@markdown-di/vite',
  },
})
