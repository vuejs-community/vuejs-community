import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'shieldmycode-vite-plugin',
  description: 'Vite / Rollup plugin for Shield (shieldmycode.com) — protect your bundle on every vite build.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rollup',
    'rollup-plugin',
    'obfuscator',
    'obfuscation',
    'javascript-obfuscator',
    'self-defending',
    'anti-debug',
    'anti-llm',
    'shield',
    'shieldmycode',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/shieldmycode-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
