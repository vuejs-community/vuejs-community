import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cpp-loader',
  description: 'Vite plugin — import .cpp files as typed ES modules compiled to WebAssembly via Emscripten',
  version: '2.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cpp',
    'c++',
    'webassembly',
    'wasm',
    'emscripten',
    'embind',
    'native',
    'loader',
    'plugin',
    'typescript',
    'wasm-bindgen',
    'cpp-to-wasm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/francomay3/vite-cpp-loader',
    npm: 'https://www.npmjs.com/package/vite-plugin-cpp-loader',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
