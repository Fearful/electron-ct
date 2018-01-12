import * as express from 'express'
import render from './serverRender'

const PORT: number = parseInt(process.env.PORT) || 8081;
const HOSTNAME: string = process.env.HOSTNAME || 'localhost';

const server = express();

console.log('IS_Production', 'TRUE');

server.use("/", express.static("build/web/client/"));

server.use('/icon.png',express.static('build/web/client/icon.png'));
server.use('/favicon.ico',express.static('build/web/client/icon.png'));
server.use("/sw.js", express.static("build/web/client/sw.js"));
server.use("/workbox-sw.prod.v2.1.0.js", express.static("build/web/client/workbox-sw.prod.v2.1.0.js"));

server.get('*', (req: express.Request, res: express.Response) => {
    render(req.url).then((html: string) => {
        res.status(200);
        res.end(html);
    }).catch((e: Error)=> {
        console.log('Error rendering: ',e);
        res.status(500);
        res.end();
    });
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Listening on: ${HOSTNAME}:${PORT}`);
});