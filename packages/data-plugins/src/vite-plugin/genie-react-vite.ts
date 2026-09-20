import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@genie-react/vite',
  description: 'Vite plugin that mounts the Genie hub on the dev server and injects the in-browser client.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'tanstack',
    'devtools',
    'ai-agent',
    'claude',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/y0u-0/genie-react',
    npm: 'https://www.npmjs.com/package/@genie-react/vite',
    website: 'https://github.com/y0u-0/genie-react-agent#readme',
  },
  source: {
    github: 'y0u-0/genie-react',
    npm: '@genie-react/vite',
  },
  stats: {
    stars: 33,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
