import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-trunk',
  description: 'Seamlessly embedding WASM components in a Vite project via Trunk.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'truck',
    'wasm',
    'leptos',
  ],
  source: {
    github: 'chenhunghan/vite-plugin-trunk',
    npm: 'vite-plugin-trunk',
  },
  links: {
    github: 'https://github.com/chenhunghan/vite-plugin-trunk',
    npm: 'https://www.npmjs.com/package/vite-plugin-trunk',
    website: 'https://github.com/chenhunghan/vite-plugin-trunk#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 25,
      weekly: 9,
    },
  },
})
