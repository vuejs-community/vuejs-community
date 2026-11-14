import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hakubase/cli',
  description: 'Link, type, develop and deploy Hakubase code sites; Vite, Astro and Next.js helpers for development with real data.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hakubase',
    'cli',
    'deploy',
    'vite-plugin',
    'astro-integration',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@hakubase/cli',
  },
  source: {
    npm: '@hakubase/cli',
  },
})
