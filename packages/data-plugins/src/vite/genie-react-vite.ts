import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@genie-react/vite',
  description: 'Vite plugin that mounts the Genie hub on the dev server and injects the in-browser client.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'react',
    'tanstack',
    'devtools',
    'ai-agent',
    'claude',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/y0u-0/genie-react',
    npm: 'https://www.npmjs.com/package/@genie-react/vite',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
