import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wasm-module',
  description: 'Vite plugin that loads each .wasm import as a WebAssembly.Module, like Convex and Cloudflare Workers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vitest',
    'wasm',
    'webassembly',
    'wasm-bindgen',
    'convex',
    'cloudflare-workers',
  ],
  links: {
    github: 'https://github.com/convex/convex-auth',
    npm: 'https://www.npmjs.com/package/vite-plugin-wasm-module',
    website: 'https://github.com/convex/convex-auth/tree/main/packages/vite-plugin-wasm-module#readme',
  },
  source: {
    github: 'convex/convex-auth',
    npm: 'vite-plugin-wasm-module',
  },
})
