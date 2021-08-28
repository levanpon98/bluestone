
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Bluestone',
        titleDescription: 'Bluestone',
    },
    target: "serverless",
};

module.exports = withPlugins([withImages(), nextSettings]);