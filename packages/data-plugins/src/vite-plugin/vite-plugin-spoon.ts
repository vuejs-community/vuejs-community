import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spoon',
  description: 'Visual UI editor that writes changes back into real source files. Click any element in the browser, edit it, and watch the actual code bend.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'dennis-di/spoon',
    npm: 'vite-plugin-spoon',
  },
  links: {
    github: 'https://github.com/dennis-di/spoon',
    npm: 'https://www.npmjs.com/package/vite-plugin-spoon',
    website: 'https://github.com/dennis-di/spoon#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 7,
    },
  },
})
