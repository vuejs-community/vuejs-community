import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@afterpack/sveltekit',
  description: 'SvelteKit plugin for AfterPack: obfuscate a SvelteKit app\'s JavaScript during the Vite build',
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
    'sveltekit',
    'svelte',
    'vite-plugin',
    'afterpack',
  ],
  links: {
    github: 'https://github.com/afterpack-dev/afterpack',
    npm: 'https://www.npmjs.com/package/@afterpack/sveltekit',
    website: 'https://www.afterpack.dev/docs/frameworks/sveltekit',
  },
  source: {
    github: 'afterpack-dev/afterpack',
    npm: '@afterpack/sveltekit',
  },
})
