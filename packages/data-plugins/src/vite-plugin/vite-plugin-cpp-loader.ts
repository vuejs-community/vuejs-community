import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cpp-loader',
  description: 'Vite plugin — import .cpp files as typed ES modules compiled to WebAssembly via Emscripten',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/francomay3/vite-cpp-loader',
    npm: 'https://www.npmjs.com/package/vite-plugin-cpp-loader',
    website: 'https://github.com/francomay3/vite-cpp-loader#readme',
  },
  source: {
    github: 'francomay3/vite-cpp-loader',
    npm: 'vite-plugin-cpp-loader',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
