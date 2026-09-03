import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-pack',
  description: 'Vite plugin: clean output by glob, zip build dir (name-version.zip), auto-increment version in build.config.json',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'pack',
    'zip',
    'clean-output',
    'glob',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-pack',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
