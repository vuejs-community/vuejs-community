import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dbg',
  description: '```js\r import { defineConfig } from "rollup";\r import config from "./package.json";\r import PluginDbg from "rollup-plugin-dbg";',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup-plugin-dbg',
    'vite-plugin',
  ],
  source: {
    github: 'CGQAQ/rollup-plugin-dbg',
    npm: 'rollup-plugin-dbg',
  },
  links: {
    github: 'https://github.com/CGQAQ/rollup-plugin-dbg',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dbg',
    website: 'https://github.com/CGQAQ/rollup-plugin-dbg#readme',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 15,
      weekly: 6,
    },
  },
})
