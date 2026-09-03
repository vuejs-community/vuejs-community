import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jetbrains/youtrack-apps-tools',
  description: 'CLI and Vite plugins for building, validating, and uploading YouTrack apps',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'youtrack',
    'workflow',
    'vite-plugin',
    'typescript',
    'jetbrains',
    'cli',
    'scaffolding',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/JetBrains/youtrack-apps',
    npm: 'https://www.npmjs.com/package/@jetbrains/youtrack-apps-tools',
  },
  stats: {
    downloads: {
      monthly: 4494,
      weekly: 1710,
    },
  },
})
