import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-git-meta',
  description: 'Vite plugin that injects git metadata (branch, tag, commit, dates) at build time, with an optional typed Vue 3 plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'git',
    'version',
    'build-info',
  ],
  links: {
    github: 'https://github.com/CheeseGrinder/vite-plugin-git-meta',
    npm: 'https://www.npmjs.com/package/vite-plugin-git-meta',
    website: 'https://github.com/CheeseGrinder/vite-plugin-git-meta#readme',
  },
  source: {
    github: 'CheeseGrinder/vite-plugin-git-meta',
    npm: 'vite-plugin-git-meta',
  },
})
