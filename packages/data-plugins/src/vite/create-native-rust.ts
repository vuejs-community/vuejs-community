import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'create-native-rust',
  description: 'Scaffold a napi-rs crate ready to import from Vite SSR server code with vite-plugin-native-rust.',
  version: '0.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kadeangell/vite-plugin-native-rust',
    npm: 'https://www.npmjs.com/package/create-native-rust',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
