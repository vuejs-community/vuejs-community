import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'shieldmycode-vite-plugin',
  description: 'Vite / Rollup plugin for Shield (shieldmycode.com) — protect your bundle on every vite build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'shieldmycode-vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/shieldmycode-vite-plugin',
    website: 'https://shieldmycode.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
