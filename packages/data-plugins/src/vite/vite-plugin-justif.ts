import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-justif',
  description: 'Vite plugin for justif — publication-grade text justification. Auto-enhances your HTML and wires up every bundled hyphenation language for dev and build.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'hyphenation',
    'justif',
    'justification',
    'knuth-plass',
    'line-breaking',
    'microtypography',
    'typography',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/atifyushri/vite-plugin-justif',
    npm: 'https://www.npmjs.com/package/vite-plugin-justif',
  },
  stats: {
    downloads: {
      monthly: 309,
      weekly: 11,
    },
  },
})
