import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'shipped-secrets',
  description: 'Find secrets that ship to the browser or sit in git history, and check whether they still work: your real .env values, known key shapes and risky public env names, in any framework\'s build output, source maps included.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'secrets',
    'security',
    'vite',
    'vite-plugin',
    'nextjs',
    'env',
    'bundle',
    'leak',
    'supabase',
    'stripe',
    'ci',
    'git-history',
    'verify',
  ],
  links: {
    github: 'https://github.com/lagudafuadtosin/shipped-secrets',
    npm: 'https://www.npmjs.com/package/shipped-secrets',
    website: 'https://github.com/lagudafuadtosin/shipped-secrets#readme',
  },
  source: {
    github: 'lagudafuadtosin/shipped-secrets',
    npm: 'shipped-secrets',
  },
})
