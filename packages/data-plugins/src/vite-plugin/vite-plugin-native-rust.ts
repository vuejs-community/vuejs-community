import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-native-rust',
  description: 'Import Rust directly in Vite SSR server code — compiles napi-rs crates to native addons with caching, types, and zero-config deploys.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'kadeangell/vite-plugin-native-rust',
    npm: 'vite-plugin-native-rust',
  },
  links: {
    github: 'https://github.com/kadeangell/vite-plugin-native-rust',
    npm: 'https://www.npmjs.com/package/vite-plugin-native-rust',
    website: 'https://github.com/kadeangell/vite-plugin-native-rust#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1048,
      weekly: 240,
    },
  },
})
