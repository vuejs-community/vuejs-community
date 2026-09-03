import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@skylvi/veyl-vite-plugin',
  description: 'A Vite plugin that obfuscates build output with Veyl',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'obfuscation',
    'obfuscator',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hazelcaffe/veyl',
    npm: 'https://www.npmjs.com/package/@skylvi/veyl-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
