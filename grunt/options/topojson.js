module.exports = {
    build: {
        files: [{
            expand: true,
            src: ['*.geo.json'],
            cwd: 'data/ACT/geo/',
            dest: 'data/ACT/topo/',
            rename: function(dest, filename) {
                return dest + filename.replace('.geo.json', '.topo.json');
            }
        }]
    }
};
