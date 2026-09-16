import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-skills',
  description: 'Import Agent Skills from SKILL.md files in Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'agent-skills',
    'skills',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'aryasaatvik/vite-plugin-agent-skills',
    npm: 'vite-plugin-skills',
  },
  links: {
    github: 'https://github.com/aryasaatvik/vite-plugin-agent-skills',
    npm: 'https://www.npmjs.com/package/vite-plugin-skills',
    website: 'https://github.com/aryasaatvik/vite-plugin-agent-skills#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
