import type { Component } from '@example/app/engine/context'
import type { AttrServe } from '@example/app/engine/serve'

export default <Component>async function (ctx) {
    const attr = serve();
    attr.init('HttpPort', process.env.HTTP_PORT);
    Object.assign(ctx, <Partial<typeof ctx>>{ attr });
}
interface serve extends AttrServe {
    readonly map: Map<string, string>
    init(key: keyof AttrKind, val?: string | number): void
}
function serve(): serve {
    return {
        map: new Map(),

        find(key) {
            return this.map.get(key);
        },
        with(key, val) {
            this.map.set(key, val.toString());
        },
        init(key, val) {
            if (val === undefined) return;
            this.with(key, val);
        },
    };
}