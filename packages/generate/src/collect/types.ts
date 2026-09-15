export interface NpmSearchObject {
  package: {
    name: string
    version: string
    description?: string
    keywords?: string[]
    date: string
    links: {
      npm: string
      homepage?: string
      repository?: string
    }
    publisher: {
      username: string
      email?: string
    }
  }
  score: {
    final: number
    detail: {
      quality: number
      popularity: number
      maintenance: number
    }
  }
  downloads: {
    monthly?: number
    weekly: number
  }
}

export interface NpmSearchResponse {
  objects: NpmSearchObject[]
  total: number
  time: string
}

export const PLUGIN_KEYWORDS = [
  'vite-plugin',
  'rollup-plugin',
  'rolldown-plugin',
  'unplugin',
] as const

export type PluginType = typeof PLUGIN_KEYWORDS[number]

export const PLUGIN_SCOPES = ['@rollup/plugin-'] as const
