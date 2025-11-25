import type { MainFrame } from '@example/app/engine/serve'
import type { PropServe } from '@example/app/engine/serve'
import type { AttrServe } from '@example/app/engine/serve'
import type { HttpServe } from '@example/app/engine/serve'
import mainFrame from '@example/app/engine/serve/main'
import attrServe from '@example/app/engine/serve/attr'
import propServe from '@example/app/engine/serve/prop'
import httpServe from '@example/app/engine/serve/http'
import { EventEmitter } from 'node:events'
import '@example/app/engine/node'

export function Context(): Context {
    const ctx = context();
    ctx.with(mainFrame);
    ctx.with(attrServe);
    ctx.with(propServe);
    ctx.with(httpServe);
    return ctx;
}
export interface Context extends NodeJS.EventEmitter {
    readonly main: MainFrame
    readonly prop: PropServe
    readonly attr: AttrServe
    readonly http: HttpServe
    with(...comp: Component[]): Promise<void>
    serve(html: string): Promise<void>
}
export interface Component {
    (ctx: Context): Promise<void>
}
export default {
    Context,
};
interface context extends Context {
    await(html: string): Promise<void>
}
function context(): context {
    return Object.assign(new EventEmitter(), <context>{
        async with(...comp) {
            for (const cb of comp) {
                await cb(this);
            }
        },
        async serve(html) {
            await this.await(html);
        },
        async await(html) {
            await this.main.loadFile(html);

            const port = this.attr.find('HttpPort')?.number() ?? 8085;
            await this.http.listen({ port });
        },
    });
}