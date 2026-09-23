import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@path-ioc/pack',
  description: 'Mesh registry distribution bundler & obfuscator for Path-IoC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ioc',
    'bundler',
    'obfuscator',
    'distribution',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/path-ioc/path-ioc',
    npm: 'https://www.npmjs.com/package/@path-ioc/pack',
    website: 'https://path-ioc.dev',
  },
  source: {
    github: 'path-ioc/path-ioc',
    npm: '@path-ioc/pack',
  },
})
