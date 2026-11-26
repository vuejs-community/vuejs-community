import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@waysharknite-tools/vite-plugin-wishes',
  description: 'Vite-плагин: в dev-режиме выбираете элемент страницы, пишете пожелание — оно сохраняется в папку проекта вместе с местом в коде и скриншотом для AI-агента.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'inspector',
    'feedback',
    'react',
    'claude-code',
    'ai-agent',
  ],
  links: {
    github: 'https://github.com/waysharknite/vite-wishes-plugin',
    npm: 'https://www.npmjs.com/package/@waysharknite-tools/vite-plugin-wishes',
    website: 'https://github.com/waysharknite/vite-wishes-plugin#readme',
  },
  source: {
    github: 'waysharknite/vite-wishes-plugin',
    npm: '@waysharknite-tools/vite-plugin-wishes',
  },
})
