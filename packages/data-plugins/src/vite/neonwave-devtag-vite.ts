import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@neonwave/devtag-vite',
  description: 'Vite plugin for @neonwave/devtag: build-time git branch/worktree detection injected via virtual:devtag/config.',
  version: '0.1.0-alpha.0',
  category: 'plugin',
  tags: [
    'dev-environment',
    'devtag',
    'git-branch',
    'worktree',
    'favicon',
    'overlay',
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MyNameReallySux/chriscoppola.me',
    npm: 'https://www.npmjs.com/package/@neonwave/devtag-vite',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 3,
    },
  },
})
