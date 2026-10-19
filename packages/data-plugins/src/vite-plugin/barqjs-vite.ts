import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@barqjs/vite',
  description: 'The barq Vite plugin: the compiler, file routes, compiled styles and the server build, from one call',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'barq',
    'ssr',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/salamaashoush/barq',
    npm: 'https://www.npmjs.com/package/@barqjs/vite',
    website: 'https://github.com/salamaashoush/barq#readme',
  },
  source: {
    github: 'salamaashoush/barq',
    npm: '@barqjs/vite',
  },
})
