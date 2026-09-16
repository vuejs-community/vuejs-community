import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tauri',
  description: 'Integrate Tauri in a Vite project to build cross-platform apps.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tauri',
    'tauri-plugin',
  ],
  source: {
    github: 'amrbashir/vite-plugin-tauri',
    npm: 'vite-plugin-tauri',
  },
  links: {
    github: 'https://github.com/amrbashir/vite-plugin-tauri',
    npm: 'https://www.npmjs.com/package/vite-plugin-tauri',
    website: 'https://github.com/amrbashir/vite-plugin-tauri#readme',
  },
  stats: {
    stars: 293,
    downloads: {
      monthly: 3759,
      weekly: 342,
    },
  },
})
