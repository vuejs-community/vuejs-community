import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-rust',
  description: 'A rollup plugin that that compile Rust code into WebAssembly modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rust',
    'webassembly',
  ],
  links: {
    github: 'https://github.com/DrSensor/rollup-plugin-rust',
    npm: 'https://www.npmjs.com/package/rollup-plugin-rust',
    website: 'https://github.com/DrSensor/rollup-plugin-rust#readme',
  },
  source: {
    github: 'DrSensor/rollup-plugin-rust',
    npm: 'rollup-plugin-rust',
  },
  stats: {
    stars: 41,
    downloads: {
      monthly: 111,
      weekly: 14,
    },
  },
})
