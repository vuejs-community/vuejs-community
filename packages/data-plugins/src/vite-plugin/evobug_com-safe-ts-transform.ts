import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@evobug_com/safe-ts-transform',
  description: 'SAFE-TS build-time transform: a Vite/Rolldown/Rollup plugin and a Node loader that rewrite q(), match(), parseJson<T>(), loops and @inline, and run the SAFE-TS checks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'safe-ts',
    'typescript',
    'type-safety',
    'vite-plugin',
    'rollup-plugin',
    'rolldown',
    'node-loader',
    'transform',
    'result',
    'pattern-matching',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@evobug_com/safe-ts-transform',
    website: 'https://safe-ts.evobug-pages.com/guide/adoption',
  },
  source: {
    npm: '@evobug_com/safe-ts-transform',
  },
})
