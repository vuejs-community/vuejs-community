import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rust',
  description: 'A rollup plugin that that compile Rust code into WebAssembly modules',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'DrSensor/rollup-plugin-rust',
    npm: 'rollup-plugin-rust',
  },
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
