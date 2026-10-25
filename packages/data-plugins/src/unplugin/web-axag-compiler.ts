import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@web-axag/compiler',
  description: 'Build-time AXAG extraction: manifests and WebMCP tools from HTML, JSX, Vue and Angular sources',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'axag',
    'vite',
    'webpack',
    'rollup',
    'unplugin',
    'mcp',
    'webmcp',
  ],
  links: {
    github: 'https://github.com/web-axag/sdk',
    npm: 'https://www.npmjs.com/package/@web-axag/compiler',
    website: 'https://axag.org',
  },
  source: {
    github: 'web-axag/sdk',
    npm: '@web-axag/compiler',
  },
})
