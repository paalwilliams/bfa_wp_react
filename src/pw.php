<?php

// Impport webticker jQuery dependency
add_action('wp_enqueue_scripts', 'enqueue_ticker_js');

function enqueue_ticker_js() {
  wp_enqueue_script('ticker_js_min', get_stylesheet_directory_uri() . '/src/dependencies/js/webticker.min.js' );
}

function get_my_menu() {
  // Replace your menu name, slug or ID carefully
  return wp_get_nav_menu_items('Main Navigation');
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'wp/v2', 'menu', array(
      'methods' => 'GET',
      'callback' => 'get_my_menu',
      'permission_callback' => '__return_true'
  ) );
} );

remove_filter('template_redirect', 'redirect_canonical');


add_action( 'rest_api_init', function () {
    
    register_rest_route( 'wp/v2', '/frontpage',
        array(
            'methods'  => 'GET',
            'callback' => 'get_frontpage',
            'permission_callback' => '__return_true'
            )
        );
    } );
  
  
  // Callback function.
  function get_frontpage( $object ) {
  
    // Get WP options front page from settings > reading.
    $frontpage_id = get_option('page_on_front');
  
    // Handle if error.
    if ( empty( $frontpage_id ) ) {
        
      // return error
      return 'error';
    }
  
    // Create request from pages endpoint by frontpage id.
    $request  = new WP_REST_Request( 'GET', '/wp/v2/pages/' . $frontpage_id );
  
    // Parse request to get data.
    $response = rest_do_request( $request );
  
    // Handle if error.
    if ( $response->is_error() ) {
       return 'error';
    }
  
    return $response->get_data();
}
?>