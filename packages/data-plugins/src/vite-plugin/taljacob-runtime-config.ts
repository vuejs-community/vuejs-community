import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@taljacob/runtime-config',
  description: 'Build a web app once, set its settings when it is deployed - and refuse to start when they are missing or wrong.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'runtime-config',
    'runtime-env',
    'environment-variables',
    'config',
    'spa',
    'vite',
    'vite-plugin',
    'docker',
    'nginx',
    'envsubst',
    'build-once-deploy-anywhere',
  ],
  links: {
    github: 'https://github.com/taljacob2/runtime-config',
    npm: 'https://www.npmjs.com/package/@taljacob/runtime-config',
    website: 'https://github.com/taljacob2/runtime-config#readme',
  },
  source: {
    github: 'taljacob2/runtime-config',
    npm: '@taljacob/runtime-config',
  },
})
