export type { FastifyInstance as HttpServe } from 'fastify'
export type { BrowserWindow as MainFrame } from 'electron'
import '@example/app/engine/node'

export interface PropServe {
    find(key: keyof PropKind): string | undefined
}
export interface AttrServe {
    with(key: keyof AttrKind, val: string | number): void
    find(key: keyof AttrKind): string | undefined
}
declare global {
    interface PropKind {
    }
    interface AttrKind {
        HttpPort: number
    }
}
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HTTP_PORT?: string
        }
    }
}