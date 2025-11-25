import main from '@example/app/engine/context';
import { app } from 'electron';
import * as path from 'path';

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
}).whenReady().then(async function () {
    const html = path.join(__dirname, "./index.html");
    const ctx = main.Context();
    await ctx.serve(html);
});