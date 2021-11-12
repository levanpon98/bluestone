
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Bluestone',
        titleDescription: 'Bluestone',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);