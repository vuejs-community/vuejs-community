import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cohorly/cli',
  description: 'Cohorly command line and build plugins: inject debug ids, upload source map indexes, R8 mappings and dSYM symcaches so Cohorly can symbolicate errors. Includes Vite, Next.js and Expo (React Native) plugins.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cohorly',
    'error-tracking',
    'source-maps',
    'sourcemaps',
    'hermes',
    'r8',
    'proguard',
    'dsym',
    'symcache',
    'ios',
    'react-native',
    'expo',
    'config-plugin',
    'vite',
    'vite-plugin',
    'nextjs',
    'cli',
  ],
  links: {
    github: 'https://github.com/Gitarcitano/cohorly-js',
    npm: 'https://www.npmjs.com/package/@cohorly/cli',
    website: 'https://github.com/Gitarcitano/cohorly-js#readme',
  },
  source: {
    github: 'Gitarcitano/cohorly-js',
    npm: '@cohorly/cli',
  },
})
