module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src : ['css/less/*.less', 'js/*.js', 'js/classes/*.js', 'js/core/*.js', 'js/views/*.js']
                },
                options: {
                    proxy: "localhost:63342/C_Holidays_Copy_Taskrunner"
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['css']
                },
                files: {
                    'css/styles.css': 'css/less/index.less'
                }
            }
        },
        concat: {
            dist: {
                src: ['js/classes/class.city.js', 'js/classes/class.hotel.js'],
                dest: 'js/classes/mergedclasses.js',
            },
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['css/styles.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/testUglify.js': ['js/classes/mergedclasses.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/core/*.js'],
                tasks: ['concat', 'uglify'],
            },
            styles: {
                files: ['css/less/index.less'],
                tasks: ['less', 'cssmin'],
            },
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'indexmin.html': 'index.html',     // 'destination': 'source'
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, src: ['js/*'], dest: 'jscopy/'},
                ],
            },
        },
            prettify: {
                options: {
                    indent: 2, //Zeileneinzug
                    indent_char: ' ',
                    wrap_line_length: 90, //Umbruch
                    brace_style: 'expand', //Einrückungen
                    unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
                },
                one: {
                    src: 'index.html',
                    dest: 'prettyindex.html'
                }
            }
    });

    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less', 'concat', 'uglify', 'cssmin', 'htmlmin']);
    grunt.registerTask('serve', ['default','browserSync', 'watch']);
};