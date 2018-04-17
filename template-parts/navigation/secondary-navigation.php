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

 <a class="logo font-effect-fire-animation second-logo" href="<?php bloginfo('url'); ?>">Josefin Eklund</a>

 <!-- <div class="container-menu change" onClick=>
   <div className="bar1"></div>
   <div className="bar2"></div>
   <div className="bar3"></div>
</div> -->
<?php
  $args = array(
    'theme_location' => 'secondary'
  );
  wp_nav_menu( $args );
?>
