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

<!-- <div class="container-menu change" onClick=>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div> -->

<div class="menu-icon-container">
  <div class="menu-icon" onclick="menuFunction()" id="menu-icon"></div>
</div>
<?php
  $args = array(
    'theme_location' => 'primary',
    'container_id' => 'menu-primary-id'
  );
  wp_nav_menu( $args );
?>
