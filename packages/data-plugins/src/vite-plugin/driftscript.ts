import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'driftscript',
  description: 'A strict, deterministic-aware, hot-reloadable scripting language. Host-neutral: it knows types, effects and capabilities, and never a scene, a mesh or a mix bus',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/drftrun/driftscript',
    npm: 'https://www.npmjs.com/package/driftscript',
    website: 'https://script.driftengine.dev',
  },
  source: {
    github: 'drftrun/driftscript',
    npm: 'driftscript',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1658,
      weekly: 164,
    },
  },
})
