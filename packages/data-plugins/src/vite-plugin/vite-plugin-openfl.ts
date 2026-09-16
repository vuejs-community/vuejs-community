import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openfl',
  description: 'Vite plugin for OpenFL',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rollup-plugin',
    'OpenFL',
    'haxe',
  ],
  source: {
    github: 'feathersui/vite-plugin-openfl',
    npm: 'vite-plugin-openfl',
  },
  links: {
    github: 'https://github.com/feathersui/vite-plugin-openfl',
    npm: 'https://www.npmjs.com/package/vite-plugin-openfl',
    website: 'https://github.com/feathersui/vite-plugin-openfl#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
