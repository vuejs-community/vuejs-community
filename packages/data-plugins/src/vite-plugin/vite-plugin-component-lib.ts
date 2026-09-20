import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-component-lib',
  description: 'Framework-agnostic Vite plugin that emits an unbundled component library in both ESM and CJS formats by default, using a single `vite build` command. It wires up Vite’s `environments` + `builder` APIs so the same source can ship to multiple module targets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-component-lib',
  },
  source: {
    npm: 'vite-plugin-component-lib',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
