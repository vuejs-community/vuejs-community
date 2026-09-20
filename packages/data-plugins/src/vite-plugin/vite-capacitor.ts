import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-capacitor',
  description: 'Automate Capacitor configuration (IP & webDir) sync with Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'capacitor',
    'ios',
    'android',
    'mobile',
  ],
  links: {
    github: 'https://github.com/YanChenBai/vite-capacitor',
    npm: 'https://www.npmjs.com/package/vite-capacitor',
    website: 'https://github.com/YanChenBai/vite-capacitor#readme',
  },
  source: {
    github: 'YanChenBai/vite-capacitor',
    npm: 'vite-capacitor',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
