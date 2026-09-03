import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-capacitor',
  description: 'Automate Capacitor configuration (IP & webDir) sync with Vite.',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'capacitor',
    'ios',
    'android',
    'mobile',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/YanChenBai/vite-capacitor',
    npm: 'https://www.npmjs.com/package/vite-capacitor',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 6,
    },
  },
})
