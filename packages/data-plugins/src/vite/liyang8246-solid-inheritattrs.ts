import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@liyang8246/solid-inheritattrs',
  description: 'Vite plugin for SolidJS that automatically forwards class and style attributes from parent components to child components\' root elements.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'solid',
    'solidjs',
    'vite-plugin',
    'class',
    'style',
    'attribute-forwarding',
    'inheritAttrs',
    'babel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/liyang8246/solid-inheritattrs',
    npm: 'https://www.npmjs.com/package/@liyang8246/solid-inheritattrs',
  },
  stats: {
    downloads: {
      monthly: 115,
      weekly: 4,
    },
  },
})
