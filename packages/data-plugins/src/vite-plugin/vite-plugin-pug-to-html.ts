import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pug-to-html',
  description: 'Vite plugin that compiles Pug to HTML files for backends, mailers and servers, in worker threads while the bundle builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'html',
    'pug',
    'static',
    'templates',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/imamatory/vite-plugin-pug-to-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-pug-to-html',
    website: 'https://github.com/imamatory/vite-plugin-pug-to-html#readme',
  },
  source: {
    github: 'imamatory/vite-plugin-pug-to-html',
    npm: 'vite-plugin-pug-to-html',
  },
})
