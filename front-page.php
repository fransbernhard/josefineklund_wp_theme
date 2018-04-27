<?php

get_header();

get_template_part( 'template-parts/navigation/navigation' ); ?>

<main id="main" class="container" role="main">
	<div class="background-img"></div>

	<a href="#instagram">
		<div class="rotating rotate" id="rotate">
			<h3>Instagram</h3>
		</div>
	</a>

	<div class="projects-container">
		<a id="projects-img" class="projects" href="#projects">Projects</a>
	</div>

	<?php if ( has_post_thumbnail() ) {
		$homeImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>
		<img id="rotate-img" class="rotating-back rotate" src="<?php echo $homeImg[0] ?>">
	<?php } ?>

	<!-- IMAGE SCREENSHOT FROM AMAZING VADEOMAKER = LOROCROM @ https://vimeo.com/243208219 -->
	<div class="first-section" id="home">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post();
       	the_content();
		endwhile; endif; ?>
	</div>

	<div id="instagram">
		<ul id="insta"></ul>
	</div>

	<div class="allProjects" id="projects">
		<div class="projects-wrapper">
			<h3>2018</h3>
			<ul>
				<?php
				$args = array (
					'post_type' => 'projects_post',
					'order'=> 'ASC',
					'tax_query' => array(
						array(
							'taxonomy' => 'category',
							'field'    => 'slug',
							'terms'    => array( '2018' )
						)
					)
				);

				$query1 = new WP_Query( $args );

				if ( $query1->have_posts() ) {
					while ( $query1->have_posts() ) {
						$query1->the_post(); ?>
						<li class="project-item">
							<p><span><?php the_title(); ?></span> | <?php the_content(); ?></p>
						</li>
					<?php }
					wp_reset_postdata();
				} ?>
			</ul>

			<h3>2017</h3>
			<ul> <?php
				$args2 = array (
					'post_type' => 'projects_post',
					'order'=> 'ASC',
					'tax_query' => array(
						array(
							'taxonomy' => 'category',
							'field'    => 'slug',
							'terms'    => array( '2017' )
						)
					)
				);
				$query2 = new WP_Query( $args2 );
				if ( $query2->have_posts() ) {
					while ( $query2->have_posts() ) {
						$query2->the_post(); ?>
						<li class="project-item">
							<p><span><?php the_title(); ?></span> | <?php the_content(); ?></p>
						</li>
					<?php }
					wp_reset_postdata();
				} ?>
			</ul>

			<h3>2016</h3>
			<ul> <?php
				$args3 = array (
					'post_type' => 'projects_post',
					'order'=> 'ASC',
					'tax_query' => array(
						array(
							'taxonomy' => 'category',
							'field'    => 'slug',
							'terms'    => array( '2016' )
						)
					)
				);
				$query3 = new WP_Query( $args3 );
				if ( $query3->have_posts() ) {
					while ( $query3->have_posts() ) {
						$query3->the_post(); ?>
						<li class="project-item">
							<p><span><?php the_title(); ?></span> | <?php the_content(); ?></p>
						</li>
					<?php }
					wp_reset_postdata();
				} ?>
			</ul>
		</div>
	</div>

	<div class="post-container" id="art">
		<h2 class="font-effect-neon">ART WORKS</h2>
	  <div class="post-wrapper">
      <?php
				$postArgs = array (
					'post_type' => 'post',
					'order'=> 'ASC',
					'posts_per_page' => 20,
				);
				$the_query = new WP_Query( $postArgs );
        if ( $the_query->have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post();
          if ( has_post_thumbnail() ) :
            $thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium');?>

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
      ?>
	  </div>
	</div>

	<div class="about" id="about">
		<div class="about-wrapper">
			<?php
				$args = array(
					'post_type' => 'about_post',
					'posts_per_page' => 5,
					'order' => "ASC"
				);
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post();
					get_template_part( 'template-parts/post/content' );
				endwhile;
			?>
			<a class="emailMe" id="emailMe" href="mailto:josefineklundmail@gmail.com?Subject=forever%20dolphin%20love" target="_top">EMAIL ME</a>
		</div>
	</div>

</main>

<?php get_footer();
