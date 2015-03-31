module.exports = {
    build: {
        files: [{
            dot: true,
            src: [
                'data/*/geo',
                'data/*/topo',
                'data/*/*.kml',
            ]
        }]
    }
};
