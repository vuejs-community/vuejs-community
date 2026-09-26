import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@afterpack/vite',
  description: 'Vite plugin for AfterPack: obfuscate your production JavaScript during vite build',
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
    'vite',
    'vite-plugin',
    'afterpack',
  ],
  links: {
    github: 'https://github.com/afterpack-dev/afterpack',
    npm: 'https://www.npmjs.com/package/@afterpack/vite',
    website: 'https://www.afterpack.dev/docs/frameworks/vite',
  },
  source: {
    github: 'afterpack-dev/afterpack',
    npm: '@afterpack/vite',
  },
})
