import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ndjjd-vite-plugin-federation',
  description: 'This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'remote-component',
    'vr-module',
  ],
  source: {
    npm: 'ndjjd-vite-plugin-federation',
  },
  links: {
    npm: 'https://www.npmjs.com/package/ndjjd-vite-plugin-federation',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
