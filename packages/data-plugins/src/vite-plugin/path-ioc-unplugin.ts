import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@path-ioc/unplugin',
  description: 'Universal dev plugin for Path-IoC generating virtual modular container and TypeScript typings',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'rollup-plugin',
    'ioc',
    'dependency-injection',
    'code-generation',
  ],
  links: {
    github: 'https://github.com/path-ioc/path-ioc',
    npm: 'https://www.npmjs.com/package/@path-ioc/unplugin',
    website: 'https://path-ioc.dev',
  },
  source: {
    github: 'path-ioc/path-ioc',
    npm: '@path-ioc/unplugin',
  },
})
