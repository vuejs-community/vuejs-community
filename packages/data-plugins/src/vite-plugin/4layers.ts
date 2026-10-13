import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '4layers',
  description: 'Architecture layer checker for Vue.js / TypeScript apps. Enforces Presentation -> Application -> Domain <- Infrastructure boundaries at dev time, build time and in CI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'architecture',
    'clean-architecture',
    'layers',
    'boundaries',
    'dependency-rules',
    'vue',
    'vite',
    'vite-plugin',
    'lint',
    'static-analysis',
    'ddd',
    'hexagonal',
  ],
  links: {
    github: 'https://github.com/lukamilikic/4layers',
    npm: 'https://www.npmjs.com/package/4layers',
    website: 'https://github.com/lukamilikic/4layers#readme',
  },
  source: {
    github: 'lukamilikic/4layers',
    npm: '4layers',
  },
})
