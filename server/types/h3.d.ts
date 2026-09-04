import type { Database } from 'db0'

declare module 'h3' {
  interface H3EventContext {
    database: Database
  }
}

export {}
