import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ts-capture/vite',
  description: 'ts-capture Vite plugin — instrument modules in browser + Vitest for click-for-types and test-driven type collection. (0.x — API may change between minor versions.)',
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
    website: 'https://github.com/lelle/ts-capture#readme',
  },
  source: {
    github: 'lelle/ts-capture',
    npm: '@ts-capture/vite',
  },
})
