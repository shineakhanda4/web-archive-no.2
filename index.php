<?php get_header(); // This pulls in the code above, including wp_head() ?>

<main>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <section id="post-<?php the_ID(); ?>">
            <div class="logo-container">
                <h1><?php the_title(); ?></h1>
            </div>
            <div class="entry-content">
                <?php the_content(); ?>
            </div>
        </section>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
