import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-knip-ui',
  description: 'Visualize Knip dead code analysis in Vite DevTools',
  icon: 'logos:vite-icon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'knip',
    'dead-code',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kuttyhub/vite-plugin-knip-ui',
    npm: 'vite-plugin-knip-ui',
  },
  links: {
    github: 'https://github.com/kuttyhub/vite-plugin-knip-ui',
    npm: 'https://www.npmjs.com/package/vite-plugin-knip-ui',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
