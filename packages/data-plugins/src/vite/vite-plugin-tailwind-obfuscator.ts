import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-obfuscator',
  description: 'Vite plugin that obfuscates Tailwind CSS v4 class names at build time for anti-scraping protection',
  version: '1.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tailwindcss',
    'obfuscation',
    'css',
    'anti-scraping',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Segfaultd/vite-plugin-tailwind-obfuscator',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-obfuscator',
  },
  stats: {
    downloads: {
      monthly: 82,
      weekly: 20,
    },
  },
})
