import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailwind-obfuscator',
  description: 'Vite plugin that obfuscates Tailwind CSS v4 class names at build time for anti-scraping protection',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tailwindcss',
    'obfuscation',
    'css',
    'anti-scraping',
  ],
  links: {
    github: 'https://github.com/Segfaultd/vite-plugin-tailwind-obfuscator',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailwind-obfuscator',
    website: 'https://github.com/Segfaultd/vite-plugin-tailwind-obfuscator#readme',
  },
  source: {
    github: 'Segfaultd/vite-plugin-tailwind-obfuscator',
    npm: 'vite-plugin-tailwind-obfuscator',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 107,
      weekly: 57,
    },
  },
})
