import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-skills',
  description: 'Import Agent Skills from SKILL.md files in Vite.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'aryasaatvik/vite-plugin-agent-skills',
    npm: 'vite-plugin-skills',
  },
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
