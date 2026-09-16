import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@neonwave/devtag-vite',
  description: 'Vite plugin for @neonwave/devtag: build-time git branch/worktree detection injected via virtual:devtag/config.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'MyNameReallySux/chriscoppola.me',
    npm: '@neonwave/devtag-vite',
  },
  links: {
    github: 'https://github.com/MyNameReallySux/chriscoppola.me',
    npm: 'https://www.npmjs.com/package/@neonwave/devtag-vite',
    website: 'https://github.com/MyNameReallySux/chriscoppola.me/tree/main/packages/neonwave/devtag-vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
