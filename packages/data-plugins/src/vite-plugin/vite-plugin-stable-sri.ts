import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stable-sri',
  description: 'Vite plugin for stable, reproducible Subresource Integrity manifests.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sri',
    'subresource-integrity',
    'reproducible',
    'deterministic',
  ],
  source: {
    github: 'justinformentin/vite-plugin-stable-sri',
    npm: 'vite-plugin-stable-sri',
  },
  links: {
    github: 'https://github.com/justinformentin/vite-plugin-stable-sri',
    npm: 'https://www.npmjs.com/package/vite-plugin-stable-sri',
    website: 'https://github.com/justinformentin/vite-plugin-stable-sri#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
