// Ensure node is discoverable by child processes (Turbopack, PostCSS, etc.)
const nodeBinDir = require('path').dirname(process.execPath);
process.env.PATH = nodeBinDir + ':' + (process.env.PATH || '');

// Also set NODE to help tools that look for it
process.env.NODE = process.execPath;

process.chdir(__dirname);
require('./node_modules/next/dist/bin/next');
