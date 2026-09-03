import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'driftscript',
  description: 'A strict, deterministic-aware, hot-reloadable scripting language. Host-neutral: it knows types, effects and capabilities, and never a scene, a mesh or a mix bus',
  version: '1.12.0',
  category: 'plugin',
  tags: [
    'driftscript',
    'scripting-language',
    'compiler',
    'language',
    'vite-plugin',
    'hot-reload',
    'deterministic',
    'ecs',
    'gamedev',
    'game-engine',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drftrun/driftscript',
    npm: 'https://www.npmjs.com/package/driftscript',
  },
  stats: {
    downloads: {
      monthly: 1274,
      weekly: 1274,
    },
  },
})
