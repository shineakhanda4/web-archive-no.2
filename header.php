<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        const wpHomeUrl = "<?php echo esc_url(home_url()); ?>";
    </script>
    <?php wp_head();
<style>
    body {
        background-image: url('<?php echo get_template_directory_uri(); ?>/photo.png') !important;
        background-size: cover;
        background-attachment: fixed;
    }
</style> ?>
</head>
<body <?php body_class(); ?>>
    <header-component></header-component>
