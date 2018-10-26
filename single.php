<?php
		get_header();
		get_template_part( 'template-parts/navigation/navigation' );
?>

<main class="container" role="main">
		<div class="wrapper single-wrapper">
				<h2><?php the_title(); ?></h2>
				<?php if (have_posts()) : while (have_posts()) : the_post();?>
						<?php if ( has_post_thumbnail() ) :
								the_post_thumbnail();
						endif;
				endwhile; endif;?>
		</div>
</main>

<?php get_footer();
