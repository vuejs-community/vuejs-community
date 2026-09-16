import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jetbrains/youtrack-apps-tools',
  description: 'CLI and Vite plugins for building, validating, and uploading YouTrack apps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'youtrack',
    'workflow',
    'vite-plugin',
    'typescript',
    'jetbrains',
    'cli',
    'scaffolding',
  ],
  source: {
    github: 'JetBrains/youtrack-apps',
    npm: '@jetbrains/youtrack-apps-tools',
  },
  links: {
    github: 'https://github.com/JetBrains/youtrack-apps',
    npm: 'https://www.npmjs.com/package/@jetbrains/youtrack-apps-tools',
    website: 'https://github.com/JetBrains/youtrack-apps/tree/main/packages/apps-tools',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 4901,
      weekly: 735,
    },
  },
})
