<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage HK
 * @since 1.0
 * @version 1.2
 */
  $thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium');

 ?>

<div class="post"
  onclick="openModal('<?php echo $thumbnailBgImg[0] ?>', '<?php the_title(); ?>', 'haha')"
  title="<?php echo the_title_attribute(); ?>"
>
  <div class="post-thumbnail" id="post-thumbnail" style="background-image: url('<?php echo $thumbnailBgImg[0]; ?>');"></div>
  <div class="post-content">
    <h3><?php the_title(); ?></h3>
    <p><?php the_content(); ?></p>
  </div>
</div>
