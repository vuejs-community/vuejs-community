import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mv3-remote-code-check',
  description: 'Reads a built browser extension the way the Chrome Web Store review does and fails on remotely hosted code (Manifest V3), as a CLI, a GitHub Action and a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'chrome-extension',
    'manifest-v3',
    'mv3',
    'chrome-web-store',
    'remote-code',
    'browser-extension',
    'vite-plugin',
    'github-action',
  ],
  links: {
    github: 'https://github.com/vannt-dev/mv3-remote-code-check',
    npm: 'https://www.npmjs.com/package/mv3-remote-code-check',
    website: 'https://github.com/vannt-dev/mv3-remote-code-check#readme',
  },
  source: {
    github: 'vannt-dev/mv3-remote-code-check',
    npm: 'mv3-remote-code-check',
  },
})
