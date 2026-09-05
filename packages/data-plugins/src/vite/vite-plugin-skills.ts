import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-skills',
  description: 'Import Agent Skills from SKILL.md files in Vite.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'agent-skills',
    'skills',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aryasaatvik/vite-plugin-agent-skills',
    npm: 'https://www.npmjs.com/package/vite-plugin-skills',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
