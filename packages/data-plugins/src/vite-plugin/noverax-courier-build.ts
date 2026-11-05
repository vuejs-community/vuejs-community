import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@noverax/courier-build',
  description: 'Courier at build time: loads courier.config the way every Courier tool does, and hands a page\'s bundle the routes its proxy client may call through a plugin for the app\'s bundler, with no routes file to generate',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'courier',
    'vite',
    'vite-plugin',
    'rsbuild',
    'rspack',
    'webpack',
    'esbuild',
    'rollup',
    'rolldown',
    'jest',
    'metro',
    'expo',
    'react-native',
    'bundler',
    'plugin',
    'proxy',
    'routes',
    'typescript',
    'type-safe',
    'api',
  ],
  links: {
    github: 'https://github.com/NoveraX/courier',
    npm: 'https://www.npmjs.com/package/@noverax/courier-build',
    website: 'https://courier.noverax.cloud/docs/proxy-mode/expose',
  },
  source: {
    github: 'NoveraX/courier',
    npm: '@noverax/courier-build',
  },
})
