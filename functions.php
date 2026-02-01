<?php
function ielts_zone_enqueue_all() {
    // This line tells WordPress EXACTLY where your style.css is
    wp_enqueue_style('main-style', get_stylesheet_uri());
    
    // This loads your main.js correctly
    wp_enqueue_script('main-js', get_template_directory_uri() . '/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'ielts_zone_enqueue_all');
