import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ts-capture/vite',
  description: 'Vite plugin for ts-capture — collects the types your code is called with, in Vitest and the dev server. (0.x — API may change between minor versions.)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ts-capture',
    'type-inference',
    'types',
    'typescript',
    'vite',
    'vite-plugin',
    'vitest',
  ],
  links: {
    github: 'https://github.com/lelle/ts-capture',
    npm: 'https://www.npmjs.com/package/@ts-capture/vite',
    website: 'https://lelle.github.io/ts-capture/',
  },
  source: {
    github: 'lelle/ts-capture',
    npm: '@ts-capture/vite',
  },
})
