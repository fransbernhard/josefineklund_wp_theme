<?php
	get_header();
	get_template_part( 'template-parts/navigation' );
	global $post;

	$instagram = get_field("instagram");
	$project = get_field("project");
	$rotateImage = get_field("rotating_image");
	// $email = ;
	// $header 


?>

<main class="Page-Home">
	<div class="Page-Home__Background"></div>

	<?php if($instagram["title"]): ?>
		<div class="Instagram">
			<a 
				class="Instagram__Link" 
				href="<?= $instagram["link"]; ?>"
				target="_blank"
			>
				<?= $instagram["title"]; ?>
			</a>
		</div>
	<?php endif; ?>

	<div class="Project-Btn">
		<?php if($project["title"]): ?>
			<a 
				class="Project-Btn__Link" 
				id="projects-img"
				href="<?= $project["link"]; ?>"
				target="_blank"
			>
				<?= $project["title"]; ?>
			</a>
		<?php else: ?>
			<a 
				class="Project-Btn__Link" 
				id="projects-img"  
				href="#projects"
			>Projects</a>
		<?php endif; ?>
	</div>
	
	<?php if($rotateImage): ?>
		<img 
			class="Page-Home__Rotate-Img" 
			src="<?= $rotateImage ?>"
			alt="Josefin Eklund"
		>
	<?php endif; ?>

	<!-- IMAGE SCREENSHOT FROM AMAZING VIDEOMAKER = LOROCROM @ https://vimeo.com/243208219 -->
	<div class="Page-Home__Top" id="home"></div>

	<div class="post-container" id="art">
		<h2 class="font-effect-neon">ART WORKS</h2>
		<div class="post-wrapper">
		<?php
			$postArgs = array (
				'post_type' => 'post',
				'order'=> 'ASC',
				'posts_per_page' => 40
			);

			$postQuery = new WP_Query( $postArgs );
			if ( $postQuery->have_posts() ) : while ( $postQuery->have_posts() ) : $postQuery->the_post();
				if ( has_post_thumbnail() ) :
					$thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium');
					$content = get_the_content();

					?>

					<div
						class="post"
						data-title="<?= the_title(); ?>"
						data-content="<?= the_content(); ?>"
						data-image="<?= $thumbnailBgImg[0] ?>">
						<div
						    class="post-thumbnail"
						    style="background-image: url('<?= $thumbnailBgImg[0]; ?>');"
						></div>
						<div class="post-content">
						    <h3 class="thumbnail-h3"><?= the_title(); ?></h3>
						    <div class="thumbnail-content">
								<p><?= the_content(); ?></p>
							</div>
						</div>
					</div>

					<div id="Modal" class="Modal">
					    <span class="Modal__Close">&times;</span>

					    <div class="Modal__Box">
					        <img class="Modal__Image" id="Modal__Image" src='<?= $thumbnailBgImg[0] ?>'>
					    </div>

					    <div id="Modal__Caption" class="Modal__Caption">
					        <div class="Modal__Content">
					            <h3 id="Modal__Title" class="Modal__Title"></h3>
								<div class="Modal__TextContainer">
									<p id="Modal__Text"></p>
								</div>
					        </div>
					        <a id="Modal__Link" class="Modal__Link">Contact me</a>
					    </div>
					</div>
				<?php endif;
			endwhile;
			wp_reset_postdata();
		endif;
		?>
		</div>
	</div>

	<div class="allProjects" id="projects">
		<div class="projects-wrapper">
			<?php $categories = get_categories(array(
				'orderby' => 'name',
				'order'   => 'DESC'
			));

			foreach ($categories as $category) {
				$args = array(
					'post_type' => 'projects_post',
					'category_name' => $category->name,
					'posts_per_page' => 30
				);

				$query = new WP_Query( $args );?>

				<?php if ($query->have_posts()) { ?>
					<h3><?= $category->name ?></h3>
					<ul>
						<?php while ( $query->have_posts() ) {
							$query->the_post(); ?>
							<li class="project-item">
								<p><span><?php the_title(); ?></span> | <?php the_content(); ?></p>
							</li>
						<?php } ?>
					</ul> <?php
					wp_reset_postdata();
				}
			} ?>
		</div>
	</div>

	<div class="Information">
		<div class="Information__Wrapper">
			<?php
				$args = array(
					'post_type' => 'about_post',
					'order' => "ASC"
				);
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post(); 
			?>
				<div class="about-post">
					<h3><?php the_title(); ?></h3>
					<p><?php the_content(); ?></p>
				</div>
			<?php endwhile; ?>
			<a class="emailMe font-effect-neon" id="emailMe" href="mailto:josefineklundmail@gmail.com?Subject=forever%20dolphin%20love" target="_top">EMAIL ME</a>
		</div>
	</div>

</main>

<?php get_footer();
