import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ovs',
  description: 'Vite plugin for OVS - A declarative UI syntax similar to Flutter and SwiftUI',
  icon: 'logos:vite-icon',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ovs',
    'UI',
    'framework',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'alamhubb/ovs',
    npm: 'vite-plugin-ovs',
  },
  links: {
    github: 'https://github.com/alamhubb/ovs',
    npm: 'https://www.npmjs.com/package/vite-plugin-ovs',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
