import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@web/rollup-plugin-polyfills-loader',
  description: 'Plugin for injecting a polyfills loader to HTML pages',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'minify',
    'html',
    'polyfill',
    'loader',
    'feature detection',
  ],
  source: {
    github: 'modernweb-dev/web',
    npm: '@web/rollup-plugin-polyfills-loader',
  },
  links: {
    github: 'https://github.com/modernweb-dev/web',
    npm: 'https://www.npmjs.com/package/@web/rollup-plugin-polyfills-loader',
    website: 'https://github.com/modern-web/web/packages/rollup-plugin-polyfills-loader',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40430,
      weekly: 7619,
    },
  },
})
