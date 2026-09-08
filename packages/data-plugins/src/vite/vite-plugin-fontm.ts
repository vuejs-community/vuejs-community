import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fontm',
  description: 'A Vite plugin for font subsetting and minification using Fontmin',
  icon: 'logos:vite-icon',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'font',
    'optimization',
    'compress',
    'minify',
    'minification',
    'subsetting',
    'fontmin',
    'extractor',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'doraemonkeys/vite-plugin-fontm',
    npm: 'vite-plugin-fontm',
  },
  links: {
    github: 'https://github.com/doraemonkeys/vite-plugin-fontm',
    npm: 'https://www.npmjs.com/package/vite-plugin-fontm',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 0,
    },
  },
})
