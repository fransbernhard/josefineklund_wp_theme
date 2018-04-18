<?php

get_header();

get_template_part( 'template-parts/navigation/navigation' ); ?>

<main id="main" class="container" role="main">
	<div class="wrapper">
		<a id="banan" target="_blank" href="https://www.instagram.com/josefiineklund/">
			<div class="rotating rotate" id="rotate">
				<h3>Instagram</h3>
			</div>
		</a>

		<?php if ( has_post_thumbnail() ) {
			$homeImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>
			<img id="rotate-img" class="rotating-back rotate" src="<?php echo $homeImg[0] ?>"></div>
		<?php } ?>

		<!-- IMAGE SCREENSHOT FROM AMAZING VADEOMAKER = LOROCROM @ https://vimeo.com/243208219 -->
		<div class="first-section home-img">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<?php
	       	the_content();
				?>
	    <?php endwhile; endif; ?>
		</div>

		<div id="instagram">
			<ul id="insta"></ul>
		</div>

		<div class="about" id="about">
			<p class="banana">
				Who am I? <br/><br/>
				I have a passion and fascination for electronic art and neon light. Inspired by plastic, water reflections and liquids, I started playing with neon lights, first digitally and later by making my own creations with crossing tubes of neon light. After some time in both Berlin and Gothenburg, I’m ready for new collaborations.
				<br/><br/><br/><br/>

				What can I do for you? <br/><br/>
				– Rental of my neon objects<br/>
				– Custom design of neon objects for your studio/reception/event/store<br/>
				– Light design or light planning for your event<br/>
				– Album covers (digital and print)<br/>
				– Give you ideas in general for your showcase or event in order to make it exciting and stimulating
				<br/><br/>
				<a class="neon font-effect-neon" href="mailto:josefineklundmail@gmail.com?Subject=forever%20dolphin%20love" target="_top">EMAIL ME</a>
			</p>

		</div>

	</div>

</main>

<?php get_footer();
