import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@afterpack/rollup',
  description: 'Rollup plugin for AfterPack: obfuscate your JavaScript output during the Rollup build',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'obfuscator',
    'javascript-obfuscator',
    'obfuscation',
    'code-protection',
    'source-code-protection',
    'javascript-security',
    'anti-reverse-engineering',
    'rollup',
    'rollup-plugin',
    'afterpack',
  ],
  links: {
    github: 'https://github.com/afterpack-dev/afterpack',
    npm: 'https://www.npmjs.com/package/@afterpack/rollup',
    website: 'https://www.afterpack.dev/docs/frameworks/rollup',
  },
  source: {
    github: 'afterpack-dev/afterpack',
    npm: '@afterpack/rollup',
  },
})
