import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-runtime-env-script-plugin',
  description: 'A plugin created to simplify the deployment process: there is no need to build a docker image every time you change environment variables.',
  version: '1.2.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'runtime',
    'docker',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mvpkx/vite-runtime-env-script-plugin',
    npm: 'https://www.npmjs.com/package/vite-runtime-env-script-plugin',
  },
  stats: {
    downloads: {
      monthly: 329,
      weekly: 46,
    },
  },
})
