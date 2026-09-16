import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-version',
  description: 'A powerful Vite plugin that automatically generates comprehensive version information files based on Git repository data with TypeScript support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Mica-Ma/vite-plugin-generate-version',
    npm: 'vite-plugin-generate-version',
  },
  links: {
    github: 'https://github.com/Mica-Ma/vite-plugin-generate-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-version',
    website: 'https://github.com/Mica-Ma/vite-plugin-generate-version#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 39,
      weekly: 2,
    },
  },
})
