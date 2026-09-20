import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-pack',
  description: 'Vite plugin: clean output by glob, zip build dir (name-version.zip), auto-increment version in build.config.json',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'pack',
    'zip',
    'clean-output',
    'glob',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-build-pack',
  },
  source: {
    npm: 'vite-plugin-build-pack',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
