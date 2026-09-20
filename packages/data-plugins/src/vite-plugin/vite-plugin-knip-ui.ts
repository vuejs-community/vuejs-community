import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-knip-ui',
  description: 'Visualize Knip dead code analysis in Vite DevTools',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'knip',
    'dead-code',
    'devtools',
  ],
  links: {
    github: 'https://github.com/kuttyhub/vite-plugin-knip-ui',
    npm: 'https://www.npmjs.com/package/vite-plugin-knip-ui',
    website: 'https://github.com/kuttyhub/vite-plugin-knip-ui#readme',
  },
  source: {
    github: 'kuttyhub/vite-plugin-knip-ui',
    npm: 'vite-plugin-knip-ui',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
