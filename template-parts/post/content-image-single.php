<?php $thumbnailBgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );?>

<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
    <div class="thumbnail-single" style="background-image: url('<?= $thumbnailBgImg[0]; ?>');"></div>
</a>
