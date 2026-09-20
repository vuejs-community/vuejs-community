import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'which-worktree',
  description: 'Dev-server helpers for worktree-based development: Vite plugin that fixes fs.allow for symlinked node_modules, plus a worktree/branch badge for Svelte, React, Next.js and other frameworks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'svelte5',
    'react',
    'nextjs',
    'git-worktree',
    'worktree',
    'dev-server',
  ],
  links: {
    github: 'https://github.com/ahrorbeksoft/which-worktree',
    npm: 'https://www.npmjs.com/package/which-worktree',
    website: 'https://github.com/ahrorbeksoft/which-worktree#readme',
  },
  source: {
    github: 'ahrorbeksoft/which-worktree',
    npm: 'which-worktree',
  },
})
