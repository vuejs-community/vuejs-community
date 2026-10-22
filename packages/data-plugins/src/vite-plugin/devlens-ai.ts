import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'devlens-ai',
  description: 'Chat with Claude Code inside your running app: click an element, say what to change, and DevLens edits your code. Works with Vite, webpack, Rspack and Next.js.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'claude',
    'claude-code',
    'ai',
    'devtools',
    'vite-plugin',
    'webpack-plugin',
    'nextjs',
    'react',
    'inspector',
    'visual-diff',
  ],
  links: {
    github: 'https://github.com/Tushararora1210/devlens',
    npm: 'https://www.npmjs.com/package/devlens-ai',
    website: 'https://github.com/Tushararora1210/devlens#readme',
  },
  source: {
    github: 'Tushararora1210/devlens',
    npm: 'devlens-ai',
  },
})
