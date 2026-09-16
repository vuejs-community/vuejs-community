import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jihchi/vite-plugin-rescript',
  description: '[![Workflows - CI][workflows-ci-shield]][workflows-ci-url] [![npm package][npm-package-shield]][npm-package-url] ![npm download per month][npm-download-shield] [![npm license][npm-licence-shield]](./LICENSE)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'ReScript',
    'ReasonML',
    'BuckleScript',
  ],
  source: {
    github: 'jihchi/vite-plugin-rescript',
    npm: '@jihchi/vite-plugin-rescript',
  },
  links: {
    github: 'https://github.com/jihchi/vite-plugin-rescript',
    npm: 'https://www.npmjs.com/package/@jihchi/vite-plugin-rescript',
    website: 'https://github.com/jihchi/vite-plugin-rescript',
  },
  stats: {
    stars: 116,
    downloads: {
      monthly: 8841,
      weekly: 1835,
    },
  },
})
