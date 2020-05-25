import 'source-map-support/register'

import nodeFetch from 'node-fetch';
import { isEven } from './util';

console.log('is 2 even:', isEven(2));

async function fetchFromWeb() {
    const resp = await nodeFetch('https://github.com')
    const val = await resp.text();
    
    console.log(val);

    throw new Error('test error with sourcemap')
}

fetchFromWeb();
