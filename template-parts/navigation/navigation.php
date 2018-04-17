<?php
/**
 * Template part for nav
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage NINA
 * @since 1.0
 * @version 1.2
 */?>

 <a class="logo font-effect-fire-animation" href="<?php bloginfo('url'); ?>">Josefin Eklund</a>

<div class="menu-icon-container" id="menu-icon">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
</div>

<?php
  $args = array(
    'theme_location' => 'primary',
    'container_id' => 'menu-primary-id'
  );
  wp_nav_menu( $args );
?>
