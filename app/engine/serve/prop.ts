import type { Component } from '@example/app/engine/context'
import type { PropServe } from '@example/app/engine/serve'

export default <Component>async function(ctx) {
    Object.assign(ctx, <typeof ctx>{
        prop: serve() as PropServe,
    });
}
interface serve extends PropServe {
    readonly map: Map<string, string>
}
function serve(): serve {
    return {
        map: new Map(),

        find(key) {
            return this.map.get(key);
        },
    };
}