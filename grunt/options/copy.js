module.exports = {
    build: {
        files: [{
            expand: true,
            src: ['*.kml'],
            cwd: 'data/ACT/',
            dest: 'data/ACT/kml/'
        }, {
            expand: true,
            src: ['*.kml'],
            cwd: 'data/NSW/',
            dest: 'data/NSW/kml/'
        }, {
            expand: true,
            src: ['*.kml'],
            cwd: 'data/NT/',
            dest: 'data/NT/kml/'
        }, {
            expand: true,
            src: ['*.kml'],
            cwd: 'data/QLD/',
            dest: 'data/QLD/kml/'
        }, {
            expand: true,
            src: ['*.kml'],
            cwd: 'data/SA/',
            dest: 'data/SA/kml/'
        }, {
            expand: true,
            src: ['*.kml'],
            cwd: 'data/TAS/',
            dest: 'data/TAS/kml/'
        }, {
           expand: true,
            src: ['*.kml'],
            cwd: 'data/Unknown/',
            dest: 'data/Unknown/kml/'
        }, {
            expand: true,
            src: ['*.kml'],
            cwd: 'data/VIC/',
            dest: 'data/VIC/kml/'
        }, {
            expand: true,
            src: ['*.kml'],
            cwd: 'data/WA/',
            dest: 'data/WA/kml/'
        }]
    }
};
