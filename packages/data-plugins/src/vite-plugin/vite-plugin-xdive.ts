import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xdive',
  description: 'Vite plugin that turns web pages into LLM-ready Markdown at build time with the XDive API and exposes them as a virtual module.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'markdown',
    'llm',
    'llms.txt',
    'web scraping',
    'xdive',
  ],
  links: {
    github: 'https://github.com/xdive/vite-plugin-xdive',
    npm: 'https://www.npmjs.com/package/vite-plugin-xdive',
    website: 'https://crawler.mehdisadeghian.com/docs',
  },
  source: {
    github: 'xdive/vite-plugin-xdive',
    npm: 'vite-plugin-xdive',
  },
})
