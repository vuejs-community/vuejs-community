import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@r_masseater/mapped-import',
  description: 'Imports files in your own format from TypeScript: map a file to source segments for editor features, and turn it into a module with a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'content-mapper',
    'import',
    'tanstack-intent',
    'typescript',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/masseater/ecosystems',
    npm: 'https://www.npmjs.com/package/@r_masseater/mapped-import',
    website: 'https://github.com/masseater/ecosystems/tree/main/libs/mapped-import#readme',
  },
  source: {
    github: 'masseater/ecosystems',
    npm: '@r_masseater/mapped-import',
  },
})
