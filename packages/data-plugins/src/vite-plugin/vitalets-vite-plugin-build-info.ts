import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitalets/vite-plugin-build-info',
  description: 'Git commit, dirty status, and build timestamp for Vite applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build-info',
    'git',
  ],
  links: {
    github: 'https://github.com/vitalets/vite-plugin-build-info',
    npm: 'https://www.npmjs.com/package/@vitalets/vite-plugin-build-info',
    website: 'https://github.com/vitalets/vite-plugin-build-info#readme',
  },
  source: {
    github: 'vitalets/vite-plugin-build-info',
    npm: '@vitalets/vite-plugin-build-info',
  },
})
