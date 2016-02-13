module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                options: {
                    paths: ['src']
                },
                files: {
                    "dist/scroll-icon.css": "src/scroll-icon.less"
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                sourceMap: true
            },
            target: {
                files: {
                    'dist/scroll-icon.min.css': ['dist/scroll-icon.css']
                }
            }
        },
        watch: {
            styles: {
                files: ['src/**/*.less'],
                tasks: ['less', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.registerTask('default', ['less', 'cssmin']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');


};
