module.exports = function(grunt) {
    grunt.registerTask('build', [
        'notify:build',
        //'copy:build',
        //'clean:build',
        //'togeojson:build',
        //'geojson-merge:build',
        'topojson:build',
        'notify:buildComplete',
    ]);
};
