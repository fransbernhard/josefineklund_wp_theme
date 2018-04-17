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
 // $thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium');
?>

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img">
  <div id="caption">
    <h3><?php the_title();?></h3>
    <p><?php the_content();?></p>
  </div>
</div>
