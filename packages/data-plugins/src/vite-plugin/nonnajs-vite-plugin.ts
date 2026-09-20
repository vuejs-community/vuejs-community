import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nonnajs/vite-plugin',
  description: 'Vite plugin for @nonnajs/di - aliases the handful of Node.js builtins @nonnajs/di\'s published bundle statically imports (async_hooks, fs/promises, path, url) to minimal browser-safe shims, so browser apps (React, Vue, ...) can bundle @nonnajs/di without a',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'di',
    'dependency-injection',
    'ioc',
    'nonna',
    'vite',
    'vite-plugin',
    'browser',
    'shim',
  ],
  links: {
    github: 'https://github.com/nonnajs/nonna',
    npm: 'https://www.npmjs.com/package/@nonnajs/vite-plugin',
    website: 'https://github.com/nonnajs/nonna#readme',
  },
  source: {
    github: 'nonnajs/nonna',
    npm: '@nonnajs/vite-plugin',
  },
})
