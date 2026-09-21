import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitempl',
  description: 'Vite-плагин: шаблоны для серверного рендеринга из Vue SFC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'template',
    'engine',
    'hbs',
    'handlebars',
    'askama',
    'jinja',
    'build-tool',
  ],
  links: {
    github: 'https://github.com/sotnikovse/vitempl',
    npm: 'https://www.npmjs.com/package/vitempl',
    website: 'https://github.com/sotnikovse/vitempl#readme',
  },
  source: {
    github: 'sotnikovse/vitempl',
    npm: 'vitempl',
  },
})
