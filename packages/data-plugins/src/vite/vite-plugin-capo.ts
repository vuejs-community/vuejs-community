import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-capo',
  description: 'Reorders HTML <head> elements in Vite projects at build time using capo.js guidelines to improve page load performance.',
  icon: 'logos:vite-icon',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'capo',
    'capo.js',
    'head',
    'html',
    'optimization',
    'performance',
    'plugin',
    'reorder',
    'sort',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'hsimpson270/vite-plugin-capo',
    npm: 'vite-plugin-capo',
  },
  links: {
    github: 'https://github.com/hsimpson270/vite-plugin-capo',
    npm: 'https://www.npmjs.com/package/vite-plugin-capo',
  },
  stats: {
    downloads: {
      monthly: 1065,
      weekly: 106,
    },
  },
})
