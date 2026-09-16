import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'iso-iterate',
  description: 'A feedback loop between a person reviewing a running web app and the coding agent building it. A dev-only panel bottom right of the page takes notes, pins them to real elements with a click, and writes them to a JSON file in the repo with route, selector ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'feedback',
    'review',
    'dev-tool',
    'vite-plugin',
    'coding-agent',
    'annotations',
    'design-review',
    'variants',
    'claude',
    'iteration',
  ],
  source: {
    github: 'aaroi/iso-iterate',
    npm: 'iso-iterate',
  },
  links: {
    github: 'https://github.com/aaroi/iso-iterate',
    npm: 'https://www.npmjs.com/package/iso-iterate',
    website: 'https://github.com/aaroi/iso-iterate#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 975,
      weekly: 649,
    },
  },
})
