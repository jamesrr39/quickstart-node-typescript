import 'source-map-support/register';

import nodeFetch from 'node-fetch';
import { isEven } from './util';

import * as fs from 'fs';

// use fs to write, read and delete a file
const fileName = 'test-file';
fs.writeFileSync(fileName, 'my file!\n');
const fileContents = fs.readFileSync(fileName, 'utf-8');
fs.unlinkSync(fileName);

console.log('file contents: ', fileContents);

// use a function in another file in the `src` folder
console.log('is 2 even:', isEven(2));

// use a third-party module (`node-fetch`) to make a HTTP request
async function fetchFromWeb() {
    const resp = await nodeFetch('https://api.github.com/meta');
    const val = await resp.text();

    console.log(val);

    throw new Error('test error with sourcemap')
}

fetchFromWeb();

