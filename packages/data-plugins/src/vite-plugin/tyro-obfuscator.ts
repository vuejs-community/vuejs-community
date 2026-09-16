import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tyro-obfuscator',
  description: 'Production-quality Vite plugin for selectively obfuscating JavaScript chunks using javascript-obfuscator, optimized for Laravel and modern web applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'laravel',
    'obfuscation',
    'obfuscator',
    'javascript-obfuscator',
    'security',
    'build',
  ],
  source: {
    github: 'hasinhayder/tyro-obfuscator',
    npm: 'tyro-obfuscator',
  },
  links: {
    github: 'https://github.com/hasinhayder/tyro-obfuscator',
    npm: 'https://www.npmjs.com/package/tyro-obfuscator',
    website: 'https://github.com/hasinhayder/tyro-obfuscator#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
