import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'create-native-rust',
  description: 'Scaffold a napi-rs crate ready to import from Vite SSR server code with vite-plugin-native-rust.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'create',
    'scaffold',
    'vite',
    'vite-plugin',
    'rust',
    'napi',
    'napi-rs',
    'native',
    'addon',
    'ssr',
  ],
  links: {
    github: 'https://github.com/kadeangell/vite-plugin-native-rust',
    npm: 'https://www.npmjs.com/package/create-native-rust',
    website: 'https://github.com/kadeangell/vite-plugin-native-rust/tree/main/packages/create-native-rust#readme',
  },
  source: {
    github: 'kadeangell/vite-plugin-native-rust',
    npm: 'create-native-rust',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
