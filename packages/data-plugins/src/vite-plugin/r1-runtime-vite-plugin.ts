import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@r1-runtime/vite-plugin',
  description: 'Official Vite plugin for R1 — automates Rust→WASM compilation and Tauri import patching.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tauri',
    'wasm',
    'webassembly',
    'browser',
    'runtime',
    'r1',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/12errh/r1-tauriweb-runtime-v1',
    npm: 'https://www.npmjs.com/package/@r1-runtime/vite-plugin',
    website: 'https://github.com/12errh/r1-tauriweb-runtime-v1#readme',
  },
  source: {
    github: '12errh/r1-tauriweb-runtime-v1',
    npm: '@r1-runtime/vite-plugin',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
