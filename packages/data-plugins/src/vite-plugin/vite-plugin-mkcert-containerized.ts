import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mkcert-containerized',
  description: 'Drop-in replacement for vite-plugin-mkcert that eases trusting mkcert\'s CA on the host machine when running Vite in a container.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'mkcert',
    'ssl',
    'https',
    'devcontainer',
    'container',
    'docker',
  ],
  links: {
    github: 'https://github.com/nad767/vite-plugin-mkcert-containerized',
    npm: 'https://www.npmjs.com/package/vite-plugin-mkcert-containerized',
    website: 'https://github.com/nad767/vite-plugin-mkcert-containerized#readme',
  },
  source: {
    github: 'nad767/vite-plugin-mkcert-containerized',
    npm: 'vite-plugin-mkcert-containerized',
  },
})
