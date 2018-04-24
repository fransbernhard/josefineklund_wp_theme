<?php
/**
 * Template part for displaying modal image
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage jose
 * @since 1.0
 * @version 1.2
 */
   $thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium');
?>

<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <div class="modal-box">
    <div class="arrow" onclick="changeSlide(<?php echo $post->ID ?> - 1)"></div>
    <img class="modal-content" id="modal-img">
    <div class="arrow" onclick="changeSlide(<?php echo $post->ID ?> + 1)"></div>
  </div>
  <div id="caption">
    <div class="caption-text">
      <h3></h3>
      <p><?php the_content(); ?></p>
    </div>
    <a></a>
  </div>
</div>
