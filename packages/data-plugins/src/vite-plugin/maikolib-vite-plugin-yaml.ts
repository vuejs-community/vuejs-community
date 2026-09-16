import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@maikolib/vite-plugin-yaml',
  description: 'Import YAML files as JS objects 🔌, remove all pnpm stuffs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'yaml',
    'yml',
    'modyfi',
  ],
  source: {
    github: 'MaikoTan/vite-plugin-yaml',
    npm: '@maikolib/vite-plugin-yaml',
  },
  links: {
    github: 'https://github.com/MaikoTan/vite-plugin-yaml',
    npm: 'https://www.npmjs.com/package/@maikolib/vite-plugin-yaml',
    website: 'https://github.com/MaikoTan/vite-plugin-yaml/tree/main/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2549,
      weekly: 354,
    },
  },
})
