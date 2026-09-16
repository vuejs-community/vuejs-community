import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@skylvi/veyl-vite-plugin',
  description: 'A Vite plugin that obfuscates build output with Veyl',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'obfuscation',
    'obfuscator',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'hazelcaffe/veyl',
    npm: '@skylvi/veyl-vite-plugin',
  },
  links: {
    github: 'https://github.com/hazelcaffe/veyl',
    npm: 'https://www.npmjs.com/package/@skylvi/veyl-vite-plugin',
    website: 'https://github.com/hazelcaffe/veyl#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
