import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@commentkit/build',
  description: 'CommentKit build plugins for Vite, Next.js, webpack and Astro: source locations on elements in dev, branch and commit for every build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'commentkit',
    'comments',
    'feedback',
    'vite-plugin',
    'webpack-plugin',
    'nextjs',
    'astro-integration',
    'source location',
  ],
  links: {
    github: 'https://github.com/commentkit/comment-kit',
    npm: 'https://www.npmjs.com/package/@commentkit/build',
    website: 'https://commentkit.dev',
  },
  source: {
    github: 'commentkit/comment-kit',
    npm: '@commentkit/build',
  },
})
