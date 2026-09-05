import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-native-rust',
  description: 'Import Rust directly in Vite SSR server code — compiles napi-rs crates to native addons with caching, types, and zero-config deploys.',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rust',
    'napi',
    'napi-rs',
    'native',
    'addon',
    'ssr',
    'server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kadeangell/vite-plugin-native-rust',
    npm: 'https://www.npmjs.com/package/vite-plugin-native-rust',
  },
  stats: {
    downloads: {
      monthly: 1320,
      weekly: 254,
    },
  },
})
