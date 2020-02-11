<?php
	get_header();
	get_template_part( 'template-parts/navigation' );
	global $post;

	$instagram = get_field("instagram");
	$project = get_field("project");
	$rotateImage = get_field("rotating_image");
	
	$logoACF = get_field("logo");
	$logo = $logoACF ? $logoACF : "Josefin Eklund";

	$contact = get_field("contact");
	$contactMessage = $contact["email_title"] ? $contact["email_title"] : "Forever dolpin love";

?>

<main class="Page-Home">
	<div class="Page-Home__Background"></div>

	<a class="Logo" href="#home">
		<h1 class="Logo__Title font-effect-fire-animation">
			<?= $logo; ?>
		</h1>
	</a>

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
				id="Project-Btn__Link"
				href="<?= $project["link"]; ?>"
				target="_blank"
			>
				<?= $project["title"]; ?>
			</a>
		<?php else: ?>
			<a 
				class="Project-Btn__Link" 
				id="Project-Btn__Link"  
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

	<div class="Posts" id="art">
		<h2 class="Posts__Title font-effect-neon">ART WORKS</h2>
		<div class="Posts__Wrapper">
		<?php
			$postArgs = [
				'post_type' => 'post',
				'order'=> 'ASC',
				'posts_per_page' => 40
			];

			$postQuery = new WP_Query( $postArgs );
			if ( $postQuery->have_posts() ) : while ( $postQuery->have_posts() ) : $postQuery->the_post();
				if ( has_post_thumbnail() ) :
					$thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium');
					$content = get_the_content();

					?>

					<div
						class="Post"
						data-title="<?= the_title(); ?>"
						data-content="<?= the_content(); ?>"
						data-image="<?= $thumbnailBgImg[0] ?>"
					>
						<div
						    class="Post__Thumbnail"
						    style="background-image: url('<?= $thumbnailBgImg[0]; ?>');"
						></div>
						<div class="Post__Content">
							<h3 class="Post__Title"><?= the_title(); ?></h3>
							<?= the_content(); ?>
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

	<div class="Projects" id="projects">
		<div class="Projects__Wrapper">
			<?php $categories = get_categories([
				'orderby' => 'name',
				'order'   => 'DESC'
			]);

			foreach ($categories as $category) {
				$args = [
					'post_type' => 'projects_post',
					'category_name' => $category->name,
					'posts_per_page' => 30
				];

				$query = new WP_Query( $args );?>

				<?php if ($query->have_posts()) { ?>
					<h3 class="Projects__Title"><?= $category->name ?></h3>
					<ul class="Projects__List">
						<?php while ( $query->have_posts() ) {
							$query->the_post(); ?>
							<li class="Projects__Item">
								<span class="Projects__Item-Title"><?php the_title(); ?></span> <?php the_content(); ?>
							</li>
						<?php } ?>
					</ul> <?php
					wp_reset_postdata();
				}
			} ?>
		</div>
	</div>

	<div class="Information" id="about">
		<div class="Information__Wrapper">
			<?php
				$args = [
					'post_type' => 'about_post',
					'order' => "ASC"
				];
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post(); 
			?>
				<div class="Information__Post">
					<h3><?php the_title(); ?></h3>
					<?php the_content(); ?>
				</div>
			<?php endwhile; ?>
			<a 
				class="Information__Contact font-effect-neon" 
				id="Information__Contact" 
				href="mailto:<?= $contact["email"]; ?>?subject=<?= $contactMessage; ?>" 
				target="_top"
			><?= $contact["title"]; ?></a>
		</div>
	</div>

</main>

<?php get_footer();
