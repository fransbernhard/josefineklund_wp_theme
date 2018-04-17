<?php
/**
 * Template Name: Contact Page
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header();

get_template_part( 'template-parts/navigation/secondary-navigation' );?>

<div class="container">
	<div class="c-wrapper">
  <p><?= get_post_field('post_content', $post->ID) ?></p>
	</div>
</div>

<?php get_footer(); ?>
