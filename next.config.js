const regexEqual = (x, y) =>
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline;

module.exports = {
    env: {
        title: 'Bluestone',
        titleDescription: 'Bluestone',
    },
    target: "serverless"
};