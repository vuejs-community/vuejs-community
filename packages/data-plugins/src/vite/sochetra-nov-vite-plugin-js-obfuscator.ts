import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sochetra-nov/vite-plugin-js-obfuscator',
  description: 'A Vite plugin to obfuscate JavaScript output using javascript-obfuscator.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'obfuscation',
    'javascript-obfuscator',
    'security',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Novsochetra/vite-plugin-js-obfuscator',
    npm: 'https://www.npmjs.com/package/@sochetra-nov/vite-plugin-js-obfuscator',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 10,
    },
  },
})
