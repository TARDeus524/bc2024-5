const {program} = require('commander');
const express = require('express');

const app = express()

program
    .requiredOption('-h, --host <ip>', 'ip address of the server')
    .requiredOption('-p, --port <port>', 'port of the server')
    .requiredOption('-c, --cache <path>', 'path to cache files');

program.parse(process.argv);

const opts = program.opts();
const cachePath = opts.cache;

app.listen(opts.port, opts.host, () => console.log(`server listening at ${opts.host}:${opts.port}`));
