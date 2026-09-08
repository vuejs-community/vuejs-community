import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openfl',
  description: 'Vite plugin for OpenFL',
  icon: 'logos:vite-icon',
  version: '2.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rollup-plugin',
    'OpenFL',
    'haxe',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'feathersui/vite-plugin-openfl',
    npm: 'vite-plugin-openfl',
  },
  links: {
    github: 'https://github.com/feathersui/vite-plugin-openfl',
    npm: 'https://www.npmjs.com/package/vite-plugin-openfl',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 5,
    },
  },
})
