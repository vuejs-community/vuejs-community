import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'quiet-ribbon',
  description: 'Vite plugin: environment ribbon (LOCAL / STAGING · branch · commit · built 5 min ago) on dev & staging, nothing on production. Click to copy build info for bug reports.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'environment',
    'ribbon',
    'staging',
    'build-info',
    'git',
    'badge',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/quiet-ribbon',
  },
  source: {
    npm: 'quiet-ribbon',
  },
})
