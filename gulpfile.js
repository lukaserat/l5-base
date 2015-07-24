var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var prototype = {
    js_head: [
        '/../../../../resources/themes/js/jquery/jquery.js',
        '/../../../../resources/themes/js/jquery/jquery-migrate.min.js',
    ],
    js_bottom: [
        '/../../../../resources/bower/underscore/underscore.js',
        '/../../../../resources/bower/vue/dist/vue.js',
        '/../../../../resources/bower/vue-resource/dist/vue-resource.js',
        '/../../../../resources/bower/vue-validator/dist/vue-validator.js',
    ],
    js: [
        '/../../../../resources/themes/js/bootstrap.min.js',
        '/../../../../resources/themes/js/flexslider/jquery.flexslider-min.js',
        '/../../../../resources/themes/js/jquery.swipebox.min.js',
        '/../../../../resources/themes/js/jquery.isotope.min.js',
        '/../../../../resources/themes/js/jquery.appear.js',
        '/../../../../resources/themes/js/jquery/ui/core.min.js',
        '/../../../../resources/themes/js/jquery/ui/datepicker.min.js',
        '/../../../../resources/themes/js/jquery.validate.min.js',
        '/../../../../resources/themes/js/jquery/jquery.form.min.js',
        '/../../../../resources/themes/js/jquery.jplayer.min.js',
        '/../../../../resources/themes/js/jquery.autosize.min.js',
        '/../../../../resources/themes/js/jquery.meanmenu.min.js',
        '/../../../../resources/themes/js/jquery.velocity.min.js',
    ],
    css: [
        '/../../../../resources/themes/css/bootstrap.css',
        '/../../../../resources/themes/js/flexslider/flexslider.css',
        '/../../../../resources/themes/css/animations.css',
        '/../../../../resources/themes/css/font-awesome.css',
        '/../../../../resources/themes/css/datepicker.css',
        '/../../../../resources/themes/css/swipebox.css',
        '/../../../../resources/themes/css/meanmenu.css',
        '/../../../../resources/themes/css/main.css',
        '/../../../../resources/themes/css/custom-responsive.css',
        '/../../../../resources/themes/css/custom.css',
    ]
};

/*
 |--------------------------------------------------------------------------
 | PROTOTYPE - Home Page
 |--------------------------------------------------------------------------
 */

elixir(function(mix) {

    mix

        // ----------------------------------------------------------------   JS
        .coffee([
            'prototype/swipebox.coffee',
            'prototype/sticky-header.coffee',
            'prototype/placeholder-fix.ie.coffee',
            'prototype/header-nav.coffee',
            'prototype/scroll-top.coffee',
            'prototype/datepicker.coffee',
            'prototype/animation.coffee',
            'prototype/pages/home.coffee',
        ], './public/tmp/prototype/js/home.js')

        .scripts(prototype.js.concat(prototype.js_bottom.concat([
            'home.js'
        ])), './public/prototype/home.bottom.js', 'public/tmp/prototype/js')

        // ----------------------------------------------------------------   CSS
        .less([
            'prototype/pages/home.less',
        ], './public/tmp/prototype/css/home.css')

        .styles(prototype.css.concat([
            'home.css'
        ]), './public/prototype/home.css', 'public/tmp/prototype/css')
    ;

});

/*
 |--------------------------------------------------------------------------
 | PROTOTYPE - 404 Page
 |--------------------------------------------------------------------------
 */
elixir(function(mix) {

    mix

        // ----------------------------------------------------------------   JS
        .coffee([
            'prototype/swipebox.coffee',
            'prototype/sticky-header.coffee',
            'prototype/placeholder-fix.ie.coffee',
            'prototype/header-nav.coffee',
            'prototype/pages/404.coffee',
        ], './public/tmp/prototype/js/404.js')

        .scripts(prototype.js.concat(prototype.js_bottom.concat([
            '404.js'
        ])), './public/prototype/404.bottom.js', 'public/tmp/prototype/js')

        // ----------------------------------------------------------------   CSS
        .less([
            'prototype/pages/404.less',
        ], './public/tmp/prototype/css/404.css')

        .styles(prototype.css.concat([
            '404.css'
        ]), './public/prototype/404.css', 'public/tmp/prototype/css')
    ;

});

/*
 |--------------------------------------------------------------------------
 | PROTOTYPE - Login Page
 |--------------------------------------------------------------------------
 */
elixir(function(mix) {

    mix

        // ----------------------------------------------------------------   JS
        .coffee([
            'prototype/swipebox.coffee',
            'prototype/sticky-header.coffee',
            'prototype/placeholder-fix.ie.coffee',
            'prototype/header-nav.coffee',
            'prototype/message.coffee',
            'prototype/pages/login.coffee',
        ], './public/tmp/prototype/js/login.js')

        .scripts(prototype.js.concat(prototype.js_bottom.concat([
            'login.js'
        ])), './public/prototype/login.bottom.js', 'public/tmp/prototype/js')

        // ----------------------------------------------------------------   CSS
        .less([
            'prototype/pages/login.less',
        ], './public/tmp/prototype/css/login.css')

        .styles(prototype.css.concat([
            'login.css'
        ]), './public/prototype/login.css', 'public/tmp/prototype/css')
    ;

});

/*
 |--------------------------------------------------------------------------
 | PROTOTYPE - Sign Up Page
 |--------------------------------------------------------------------------
 */
elixir(function(mix) {

    mix

        // ----------------------------------------------------------------   JS
        .coffee([
            'prototype/swipebox.coffee',
            'prototype/sticky-header.coffee',
            'prototype/placeholder-fix.ie.coffee',
            'prototype/header-nav.coffee',
            'prototype/message.coffee',
            'prototype/pages/sign-up.coffee',
        ], './public/tmp/prototype/js/sign-up.js')

        .scripts(prototype.js.concat(prototype.js_bottom.concat([
            'sign-up.js'
        ])), './public/prototype/sign-up.bottom.js', 'public/tmp/prototype/js')

        // ----------------------------------------------------------------   CSS
        .less([
            'prototype/pages/sign-up.less',
        ], './public/tmp/prototype/css/sign-up.css')

        .styles(prototype.css.concat([
            'sign-up.css'
        ]), './public/prototype/sign-up.css', 'public/tmp/prototype/css')
    ;

});

/*
 |--------------------------------------------------------------------------
 | PROTOTYPE - Post Type Page
 |--------------------------------------------------------------------------
 */
elixir(function(mix) {

    mix

        // ----------------------------------------------------------------   JS
        .coffee([
            'prototype/swipebox.coffee',
            'prototype/sticky-header.coffee',
            'prototype/placeholder-fix.ie.coffee',
            'prototype/header-nav.coffee',
            'prototype/pages/post.coffee',
        ], './public/tmp/prototype/js/post.js')

        .scripts(prototype.js.concat(prototype.js_bottom.concat([
            'post.js'
        ])), './public/prototype/post.bottom.js', 'public/tmp/prototype/js')

        // ----------------------------------------------------------------   CSS
        .less([
            'prototype/pages/post.less',
        ], './public/tmp/prototype/css/post.css')

        .styles(prototype.css.concat([
            'post.css'
        ]), './public/prototype/post.css', 'public/tmp/prototype/css')
    ;

});

/*
 |--------------------------------------------------------------------------
 | PROTOTYPE - OTHER MIXINS
 |--------------------------------------------------------------------------
 */
elixir(function(mix) {

    // ----------------------------------------------------------------   REVOLUTION SLIDER
    mix

        .scripts([
            '/../../../../resources/themes/js/revslider/rs-plugin/js/jquery.themepunch.tools.min.js',
            '/../../../../resources/themes/js/revslider/rs-plugin/js/jquery.themepunch.revolution.min.js',
        ], './public/prototype/revslider.js', 'public/tmp/prototype/js')

        .styles([
            '/../../../../resources/themes/js/revslider/rs-plugin/css/settings.css',
        ], './public/prototype/revslider.css', 'public/tmp/prototype/css')

    ;

    // ----------------------------------------------------------------   STATIC FILES
    mix
        .copy('resources/themes/images', 'public/build/images/')
        .copy('resources/themes/images', 'public/images/')

        .copy('resources/themes/fonts', 'public/build/fonts/')
        .copy('resources/themes/fonts', 'public/fonts/')

        .copy('resources/themes/js/revslider/rs-plugin/images', 'public/build/images/')
        .copy('resources/themes/js/revslider/rs-plugin/images', 'public/images/')

        .copy('resources/themes/js/revslider/rs-plugin/assets', 'public/build/assets/')
        .copy('resources/themes/js/revslider/rs-plugin/assets', 'public/assets/')

        .copy('resources/themes/js/revslider/rs-plugin/font', 'public/build/font/')
        .copy('resources/themes/js/revslider/rs-plugin/font', 'public/font/')

        .copy('resources/themes/js/flexslider/fonts', 'public/build/fonts/')
        .copy('resources/themes/js/flexslider/fonts', 'public/fonts/')

    ;

    // ----------------------------------------------------------------   BASE FILES
    mix

        .scripts(prototype.js_head, './public/prototype/base.head.js', 'public/tmp/prototype/js')
        .scripts(prototype.js, './public/prototype/base.js', 'public/tmp/prototype/js')
        .styles(prototype.css, './public/prototype/base.css', 'public/tmp/prototype/css')
        .scripts(prototype.js.concat(prototype.js_bottom), './public/prototype/base.bottom.js', 'public/tmp/prototype/js')

        .version([
            'prototype/base.head.js',
            'prototype/base.js',
            'prototype/base.css',
            'prototype/sign-up.bottom.js',
            'prototype/sign-up.css',
            'prototype/login.bottom.js',
            'prototype/login.css',
            'prototype/404.bottom.js',
            'prototype/404.css',
            'prototype/home.bottom.js',
            'prototype/home.css',
            'prototype/post.css',
            'prototype/post.bottom.js',
        ])
    ;

});


/*
 |--------------------------------------------------------------------------
 | LIVERELOAD
 |--------------------------------------------------------------------------
 */

require('laravel-elixir-livereload');

elixir(function (mix) {
    mix.livereload([
        'resources/views/**/*',
        'public/build/**/*.js',
        'public/build/**/*.css',
    ]);
});


/*
 |--------------------------------------------------------------------------
 | REFRESH
 |--------------------------------------------------------------------------
 */
var gulp       = require('gulp');
var del = require('del');

gulp.task('reset', function(){
    del([
        'public/build',
        'public/fonts',
        'public/font',
        'public/images',
        'public/prototype',
        'public/tmp',
    ]);
});