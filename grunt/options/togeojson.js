module.exports = {
    options: {
        input: 'kml',
        compress: false,
        rename: function(src, dest, format) {
            var f = format === 'topojson' ? 'topo' : 'geo';

            return src.replace('kml', f).replace('kml', f + '.json');
        }
    },
    build: {
        options: {
            output: 'geojson',
        },
        files: {
            '*': ['data/*/kml/*.kml']
        }
    }
};
