import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-godot',
  description: 'Embed and bundle Godot 4.x games using Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/itsKaynine/vite-plugin-godot',
    npm: 'https://www.npmjs.com/package/vite-plugin-godot',
    website: 'https://github.com/itsKaynine/vite-plugin-godot',
  },
  source: {
    github: 'itsKaynine/vite-plugin-godot',
    npm: 'vite-plugin-godot',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
