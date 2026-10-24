import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@usevibejs/compiler',
  description: 'Compiler and Vite plugin for vibe.js .vibe single-file components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'compiler',
    'single-file-components',
    'typescript',
    'vibejs',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vibejs/vibejs',
    npm: 'https://www.npmjs.com/package/@usevibejs/compiler',
    website: 'https://github.com/vibejs/vibejs#readme',
  },
  source: {
    github: 'vibejs/vibejs',
    npm: '@usevibejs/compiler',
  },
})
