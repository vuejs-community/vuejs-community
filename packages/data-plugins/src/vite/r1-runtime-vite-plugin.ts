import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@r1-runtime/vite-plugin',
  description: 'Official Vite plugin for R1 — automates Rust→WASM compilation and Tauri import patching.',
  version: '0.3.5',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/12errh/r1-tauriweb-runtime-v1',
    npm: 'https://www.npmjs.com/package/@r1-runtime/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 49,
      weekly: 5,
    },
  },
})
