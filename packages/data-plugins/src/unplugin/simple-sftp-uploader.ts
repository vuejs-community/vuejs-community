import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'simple-sftp-uploader',
  description: 'Upload the dist of your project to a remote server via SFTP. Bundler-agnostic unplugin for vite / rollup / rolldown / webpack / rspack / esbuild.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/imba97/simple-sftp-uploader',
    npm: 'https://www.npmjs.com/package/simple-sftp-uploader',
    website: 'https://github.com/imba97/simple-sftp-uploader#readme',
  },
  source: {
    github: 'imba97/simple-sftp-uploader',
    npm: 'simple-sftp-uploader',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 58,
      weekly: 20,
    },
  },
})
