import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@haystackeditor/verify',
  description: 'Configure Haystack to verify PRs on your repo with fixtures, auth bypass, and visual checks',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'haystack',
    'code-review',
    'verification',
    'mcp',
    'claude',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@haystackeditor/verify',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
