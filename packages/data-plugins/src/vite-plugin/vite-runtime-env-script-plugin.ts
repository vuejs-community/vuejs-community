import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-runtime-env-script-plugin',
  description: 'A plugin created to simplify the deployment process: there is no need to build a docker image every time you change environment variables.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'runtime',
    'docker',
    'build',
  ],
  links: {
    github: 'https://github.com/mvpkx/vite-runtime-env-script-plugin',
    npm: 'https://www.npmjs.com/package/vite-runtime-env-script-plugin',
    website: 'https://github.com/mvpkx/vite-runtime-env-script-plugin#readme',
  },
  source: {
    github: 'mvpkx/vite-runtime-env-script-plugin',
    npm: 'vite-runtime-env-script-plugin',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 186,
      weekly: 91,
    },
  },
})
