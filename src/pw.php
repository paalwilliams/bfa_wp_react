<?php

function get_my_menu() {
  // Replace your menu name, slug or ID carefully
  return wp_get_nav_menu_items('Main Navigation');
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'wp/v2', 'menu', array(
      'methods' => 'GET',
      'callback' => 'get_my_menu',
  ) );
} );


add_filter( 'use_block_editor_for_post', '__return_false', 10 );

remove_filter('template_redirect', 'redirect_canonical');

?>