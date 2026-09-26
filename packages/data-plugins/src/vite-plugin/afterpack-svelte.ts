import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@afterpack/svelte',
  description: 'Svelte plugin for AfterPack: obfuscate a Svelte app\'s production JavaScript during the Vite build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'obfuscator',
    'javascript-obfuscator',
    'obfuscation',
    'code-protection',
    'source-code-protection',
    'javascript-security',
    'anti-reverse-engineering',
    'svelte',
    'vite',
    'vite-plugin',
    'afterpack',
  ],
  links: {
    github: 'https://github.com/afterpack-dev/afterpack',
    npm: 'https://www.npmjs.com/package/@afterpack/svelte',
    website: 'https://www.afterpack.dev/docs/frameworks/svelte',
  },
  source: {
    github: 'afterpack-dev/afterpack',
    npm: '@afterpack/svelte',
  },
})
