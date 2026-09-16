import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@smoothtml/vite-plugin-sri',
  description: 'Vite plugin that adds Subresource Integrity (SRI) hashes to scripts and stylesheets in built HTML.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'sri',
    'subresource-integrity',
    'integrity',
    'csp',
    'security',
  ],
  source: {
    github: 'smoothtml/vite-plugin-sri',
    npm: '@smoothtml/vite-plugin-sri',
  },
  links: {
    github: 'https://github.com/smoothtml/vite-plugin-sri',
    npm: 'https://www.npmjs.com/package/@smoothtml/vite-plugin-sri',
    website: 'https://github.com/smoothtml/vite-plugin-sri#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
