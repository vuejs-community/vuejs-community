import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@haystackeditor/verify',
  description: 'Configure Haystack to verify PRs on your repo with fixtures, auth bypass, and visual checks',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'haystack',
    'code-review',
    'verification',
    'mcp',
    'claude',
    'vite-plugin',
  ],
  source: {
    npm: '@haystackeditor/verify',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@haystackeditor/verify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
