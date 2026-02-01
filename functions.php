<?php
function ielts_zone_enqueue_assets() {
    // 1. Load Main Style
    wp_enqueue_style('ielts-main-style', get_stylesheet_uri());

    // 2. Load Google Fonts (Plus Jakarta & Space Grotesk)
    wp_enqueue_style('ielts-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Space+Grotesk:wght@300..700&display=swap', array(), null);

    // 3. Load Font Awesome
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

    // 4. Load your main.js as a Module for Web Components
    wp_enqueue_script('ielts-components', get_template_directory_uri() . '/main.js', array(), '1.0', true);
    
    // Custom filter to add type="module" to main.js
    add_filter('script_loader_tag', function($tag, $handle, $src) {
        if ('ielts-components' === $handle) {
            $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
        }
        return $tag;
    }, 10, 3);
}
add_action('wp_enqueue_scripts', 'ielts_zone_enqueue_assets');

// Enable dynamic titles in the browser tab
add_theme_support('title-tag');
