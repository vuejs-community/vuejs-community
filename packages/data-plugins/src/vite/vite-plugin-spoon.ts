import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spoon',
  description: 'Visual UI editor that writes changes back into real source files. Click any element in the browser, edit it, and watch the actual code bend.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'visual-editor',
    'tailwind',
    'write-back',
    'inspector',
    'dev-tools',
    'react',
    'source-map',
    'ui-editor',
    'design-system',
    'css-tokens',
    'hot-reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dennis-di/spoon',
    npm: 'https://www.npmjs.com/package/vite-plugin-spoon',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
