import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@eldrajs/vite-plugin-theme',
  description: 'Vite plugin for Eldra themes: scans blocks/*/block.json, validates them, emits the theme manifest and the virtual modules the runtime reads (blocks, manifest, block fields, breakpoints, tokens CSS).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cms',
    'eldra',
    'theme',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/eldra-is/headless-kit',
    npm: 'https://www.npmjs.com/package/@eldrajs/vite-plugin-theme',
    website: 'https://github.com/eldra-is/headless-kit/tree/main/packages/vite-plugin-theme#readme',
  },
  source: {
    github: 'eldra-is/headless-kit',
    npm: '@eldrajs/vite-plugin-theme',
  },
})
