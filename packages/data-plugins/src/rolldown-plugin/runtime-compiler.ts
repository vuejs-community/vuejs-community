import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'runtime-compiler',
  description: 'A compile time evaluation system.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/re-utils/runtime-compiler',
    npm: 'https://www.npmjs.com/package/runtime-compiler',
    website: 'https://github.com/re-utils/runtime-compiler#readme',
  },
  source: {
    github: 're-utils/runtime-compiler',
    npm: 'runtime-compiler',
  },
})
