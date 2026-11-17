import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@viu/jetpack',
  description: 'Vite based frontend build tool for classic (Nunjucks) frontends. Successor of @viu/launchpad.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'nunjucks',
    'sass',
    'svg-sprite',
    'multi-page',
    'static-site',
    'frontend',
    'build-tool',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@viu/jetpack',
    website: 'https://gitlab.com/viu/jetpack',
  },
  source: {
    npm: '@viu/jetpack',
  },
})
