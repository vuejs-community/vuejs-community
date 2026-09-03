import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rust',
  description: 'A rollup plugin that that compile Rust code into WebAssembly modules',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rust',
    'webassembly',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/DrSensor/rollup-plugin-rust',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rust',
  },
  stats: {
    downloads: {
      monthly: 141,
      weekly: 22,
    },
  },
})
