<?php get_header();

get_template_part( 'template-parts/navigation/secondary-navigation' );?>

<div class="post-container">
  <div class="post-wrapper">

    <div class="art-posts" id="art">
      <?php $postArray = [];

        if ( have_posts() ) : while ( have_posts() ) : the_post();
          array_push($postArray, $post->ID);

          if ( has_post_thumbnail() ) : ?>
            <?php
            get_template_part( 'template-parts/post/thumbnail-image' );
            get_template_part( 'template-parts/post/modal-image' );

          endif; ?>
        <?php endwhile; endif;

        echo "<script>console.log( 'Debug Objects: " . join(', ', $postArray) . "' );</script>";

      ?>
    </div>
  </div>
</div>

<?php get_footer(); ?>
