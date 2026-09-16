import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tutao/tuta-wasm-loader',
  description: 'A plugin to automatically generate WASM files during the build process and generate their respective fallbacks in JavaScript together with a loader that verifies and automatically loads the WASM file or the fallback if the platform doesn\'t support WebAsse',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'tutao/tutanota',
    npm: '@tutao/tuta-wasm-loader',
  },
  links: {
    github: 'https://github.com/tutao/tutanota',
    npm: 'https://www.npmjs.com/package/@tutao/tuta-wasm-loader',
    website: 'https://github.com/tutao/tutanota#readme',
  },
  stats: {
    stars: 7919,
    downloads: {
      monthly: 67,
      weekly: 14,
    },
  },
})
