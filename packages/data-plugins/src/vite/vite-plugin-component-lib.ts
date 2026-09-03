import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-component-lib',
  description: 'Framework-agnostic Vite plugin that emits an unbundled component library in both ESM and CJS formats by default, using a single `vite build` command. It wires up Vite’s `environments` + `builder` APIs so the same source can ship to multiple module targets',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react-component-library',
    'preact-component-library',
    'vue-component-library',
    'svelte-component-library',
    'solid-component-library',
    'lit-component-library',
    'qwik-component-library',
    'angular-component-library',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-component-lib',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
