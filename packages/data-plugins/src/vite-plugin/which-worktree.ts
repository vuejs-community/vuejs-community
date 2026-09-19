import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'which-worktree',
  description: 'Vite plugin that fixes dev-server fs.allow for symlinked node_modules (git worktrees, cow pastures) and shows a badge with the current branch/worktree name.',
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
    'git-worktree',
    'worktree',
    'dev-server',
  ],
  source: {
    github: 'ahrorbeksoft/which-worktree',
    npm: 'which-worktree',
  },
  links: {
    github: 'https://github.com/ahrorbeksoft/which-worktree',
    npm: 'https://www.npmjs.com/package/which-worktree',
    website: 'https://github.com/ahrorbeksoft/which-worktree#readme',
  },
})
