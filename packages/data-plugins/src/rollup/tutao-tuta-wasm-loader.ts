import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tutao/tuta-wasm-loader',
  description: 'A plugin to automatically generate WASM files during the build process and generate their respective fallbacks in JavaScript together with a loader that verifies and automatically loads the WASM file or the fallback if the platform doesn\'t support WebAsse',
  version: '345.260421.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tutao/tutanota',
    npm: 'https://www.npmjs.com/package/@tutao/tuta-wasm-loader',
  },
  stats: {
    downloads: {
      monthly: 302,
      weekly: 17,
    },
  },
})
