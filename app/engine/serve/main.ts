import type { Component } from '@example/app/engine/context'
import type { MainFrame } from '@example/app/engine/serve'
import { BrowserWindow } from 'electron'

export default <Component>async function (ctx) {
    const main = serve();
    Object.assign(ctx, <Partial<typeof ctx>>{ main });
}
function serve(): MainFrame {
    return new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //preload: path.join(__dirname, "./web/preload.js")
        },
    });
}