<?php

function register_cpt() {
    register_post_type( 'about_post', [
            'supports' => ['thumbnail', 'title', 'post-formats', 'editor', 'category'],
            'labels' => [
                'name' => __( 'Abouts' ),
                'singular_name' => __( 'About' )
             ] ,
            'public' => true,
            'has_archive' => false,
        ]
    );

    register_post_type( 'projects_post',
        array(
            'supports' => ['thumbnail', 'title', 'post-formats', 'editor', 'category'],
            'labels' => [
                'name' => __( 'Projects' ),
                'singular_name' => __( 'Project' )
            ],
            'taxonomies' => [ 'category' ],
            'public' => true,
            'has_archive' => false,
        )
    );
    flush_rewrite_rules( false );
}
add_action( 'init', 'register_cpt' );

// Remove auto added p tags from content
remove_filter( 'the_content', 'wpautop' );

function my_theme_enqueue_scripts(){
    wp_enqueue_style( 'hip-style', get_template_directory_uri() . '/dist/style.min.css' );
    wp_enqueue_script('bundle', get_stylesheet_directory_uri() . '/dist/script.min.js', ['jquery'], 1, true );
}
add_action('wp_enqueue_scripts', "my_theme_enqueue_scripts");

// Register Menu
function register_my_menus() {
    register_nav_menus([
        'primary' => __( 'Primary Menu' )
    ]);
}
add_action('after_setup_theme', 'register_my_menus');

// Add thumbnail photo
add_theme_support( 'post-thumbnails' );

// Defines image sizes
add_image_size('preloader' , 16);
add_image_size('small'     , 600);
add_image_size('medium'    , 1000);
add_image_size('large'     , 1400);

// Set unlimited posts
function wpsites_no_limit_posts( $query ) {
    if( $query->is_main_query() && !is_admin() && is_home() ) {
        $query->set( 'posts_per_page', '-1' );
        $query->set( 'order', 'ASC' );
        $query->set( 'post_type', 'post' );
        $query->set( 'orderby', 'name' );
        $query->set( 'order', 'ASC' );
        $query->set( 'hide_empty', '1' );
        $query->set( 'depth', '1' );
    }
}
add_action( 'pre_get_posts', 'wpsites_no_limit_posts' );

?>
