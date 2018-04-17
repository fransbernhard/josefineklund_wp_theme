<?php get_header();

get_template_part( 'template-parts/navigation/secondary-navigation' );?>

<div class="container">
  <div class="post-wrapper">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php if ( has_post_thumbnail() ) : ?>
        <?php
        get_template_part( 'template-parts/post/thumbnail-image' );
        get_template_part( 'template-parts/post/modal-image' );

      endif; ?>
    <?php endwhile; endif; ?>
  </div>
</div>

<?php get_footer(); ?>
