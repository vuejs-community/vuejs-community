import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cc-prompter',
  description: 'Vite/Next.js plugin — Shift+Alt click element → Claude Code edits code → page auto-refreshes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'nextjs',
    'next.js',
    'webpack',
    'claude',
    'claude-code',
    'pty',
    'code-inspector',
    'ai',
    'copilot',
    'developer-tools',
  ],
  source: {
    github: 'auenger/cc-prompter',
    npm: 'cc-prompter',
  },
  links: {
    github: 'https://github.com/auenger/cc-prompter',
    npm: 'https://www.npmjs.com/package/cc-prompter',
    website: 'https://auenger.github.io/cc-prompter/',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 134,
      weekly: 3,
    },
  },
})
