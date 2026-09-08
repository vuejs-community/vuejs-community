import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-godot',
  description: 'Embed and bundle Godot 4.x games using Vite',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'itsKaynine/vite-plugin-godot',
    npm: 'vite-plugin-godot',
  },
  links: {
    github: 'https://github.com/itsKaynine/vite-plugin-godot',
    npm: 'https://www.npmjs.com/package/vite-plugin-godot',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
