import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dbg',
  description: '```js\r import { defineConfig } from "rollup";\r import config from "./package.json";\r import PluginDbg from "rollup-plugin-dbg";',
  version: '1.3.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup-plugin-dbg',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/CGQAQ/rollup-plugin-dbg',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dbg',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
