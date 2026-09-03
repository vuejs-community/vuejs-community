import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'simple-sftp-uploader',
  description: 'Upload the dist of your project to a remote server via SFTP. Bundler-agnostic unplugin for vite / rollup / rolldown / webpack / rspack / esbuild.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'sftp',
    'uploader',
    'deploy',
    'unplugin',
    'vite',
    'rollup',
    'rolldown',
    'webpack',
    'rspack',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/imba97/simple-sftp-uploader',
    npm: 'https://www.npmjs.com/package/simple-sftp-uploader',
  },
  stats: {
    downloads: {
      monthly: 94,
      weekly: 13,
    },
  },
})
