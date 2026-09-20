import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sochetra-nov/vite-plugin-js-obfuscator',
  description: 'A Vite plugin to obfuscate JavaScript output using javascript-obfuscator.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'obfuscation',
    'javascript-obfuscator',
    'security',
  ],
  links: {
    github: 'https://github.com/Novsochetra/vite-plugin-js-obfuscator',
    npm: 'https://www.npmjs.com/package/@sochetra-nov/vite-plugin-js-obfuscator',
    website: 'https://github.com/Novsochetra/vite-plugin-js-obfuscator#readme',
  },
  source: {
    github: 'Novsochetra/vite-plugin-js-obfuscator',
    npm: '@sochetra-nov/vite-plugin-js-obfuscator',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
