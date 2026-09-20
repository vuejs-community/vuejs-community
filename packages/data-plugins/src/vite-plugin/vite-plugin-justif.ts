import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-justif',
  description: 'Vite plugin for justif — publication-grade text justification. Auto-enhances your HTML and wires up every bundled hyphenation language for dev and build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/atifyushri/vite-plugin-justif',
    npm: 'https://www.npmjs.com/package/vite-plugin-justif',
    website: 'https://github.com/atifyushri/vite-plugin-justif#readme',
  },
  source: {
    github: 'atifyushri/vite-plugin-justif',
    npm: 'vite-plugin-justif',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 56,
      weekly: 9,
    },
  },
})
