<?php get_header();
  get_template_part( 'template-parts/navigation/secondary-navigation' );
  $postIdArray = [];
  $postImageArr = [];
?>

<div class="post-container">
  <div class="post-wrapper">
    <div class="art-posts" id="art">
      <?php
        if ( have_posts() ) : while ( have_posts() ) : the_post();
          array_push($postIdArray, $post->ID);
          if ( has_post_thumbnail() ) :
            $thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium');
            array_push($postImageArr, $thumbnailBgImg[0]); ?>

            <!-- THUMBNAIL SECTION -->
            <div
              class="post" onclick="openModal('<?php echo $thumbnailBgImg[0] ?>', '<?php the_title(); ?>', '<?php echo $post->ID ?>', '<?php echo the_content() ?>')"
              title="<?php echo the_title_attribute(); ?>"
            >
              <div
                class="post-thumbnail"
                id="post-thumbnail"
                style="background-image: url('<?php echo $thumbnailBgImg[0]; ?>');"
              ></div>
              <div class="post-content">
                <h3 id="thumbnail-h3"><?php the_title(); ?></h3>
                <p id="thumbnail-p"><?php the_content(); ?></p>
              </div>
            </div>

            <?php get_template_part( 'template-parts/post/modal-image' );
          endif;
        endwhile;
        endif;

        echo "<script>console.log( 'ALL POST IDs: " . join(', ', $postIdArray) . "' );</script>";
        echo "<script>console.log( 'ALL IMG URLS: " . join(', ', $postImageArr) . "' );</script>";

      ?>
    </div>
  </div>
</div>

<?php get_footer(); ?>

<!-- // get_template_part( 'template-parts/post/modal-image' ); -->
