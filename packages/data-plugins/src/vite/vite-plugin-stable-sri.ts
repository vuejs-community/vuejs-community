import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stable-sri',
  description: 'Vite plugin for stable, reproducible Subresource Integrity manifests.',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sri',
    'subresource-integrity',
    'reproducible',
    'deterministic',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'justinformentin/vite-plugin-stable-sri',
    npm: 'vite-plugin-stable-sri',
  },
  links: {
    github: 'https://github.com/justinformentin/vite-plugin-stable-sri',
    npm: 'https://www.npmjs.com/package/vite-plugin-stable-sri',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
