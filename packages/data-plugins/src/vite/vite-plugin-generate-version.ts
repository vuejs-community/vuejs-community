import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-version',
  description: 'A powerful Vite plugin that automatically generates comprehensive version information files based on Git repository data with TypeScript support',
  icon: 'logos:vite-icon',
  version: '1.0.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'git',
    'build',
    'frontend',
    'typescript',
    'ci-cd',
    'deployment',
    'versioning',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Mica-Ma/vite-plugin-generate-version',
    npm: 'vite-plugin-generate-version',
  },
  links: {
    github: 'https://github.com/Mica-Ma/vite-plugin-generate-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-version',
  },
  stats: {
    downloads: {
      monthly: 43,
      weekly: 4,
    },
  },
})
