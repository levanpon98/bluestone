import axios from 'axios';
var os = require("os");
const baseDomain = 'http://localhost:3001/api';
// const baseDomain = 'https://bluestonebuyersagents.com.au/api'; // API for products

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({   
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
