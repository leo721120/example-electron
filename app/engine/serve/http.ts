import type { Component } from '@example/app/engine/context'
import type { HttpServe } from '@example/app/engine/serve'
import fastify from 'fastify'

export default <Component>async function (ctx) {
    const http = serve();
    Object.assign(ctx, <typeof ctx>{ http });
}
function serve(): HttpServe {
    return fastify({ logger: false });
}