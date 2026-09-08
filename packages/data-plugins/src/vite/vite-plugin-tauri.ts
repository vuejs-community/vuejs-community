import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tauri',
  description: 'Integrate Tauri in a Vite project to build cross-platform apps.',
  icon: 'logos:vite-icon',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tauri',
    'tauri-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'amrbashir/vite-plugin-tauri',
    npm: 'vite-plugin-tauri',
  },
  links: {
    github: 'https://github.com/amrbashir/vite-plugin-tauri',
    npm: 'https://www.npmjs.com/package/vite-plugin-tauri',
  },
  stats: {
    downloads: {
      monthly: 6151,
      weekly: 824,
    },
  },
})
