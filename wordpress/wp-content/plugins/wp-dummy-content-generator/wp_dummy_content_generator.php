<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://wpdcg.online/about-us/
 * @since             1.0.0
 * @package           wp_dummy_content_generator
 *
 * @wordpress-plugin
 * Plugin Name:       WP Dummy Content Generator
 * Plugin URI:        https://wpdcg.online/
 * Description:       The "WP Dummy Content Generator" plugin is particularly useful for developers, designers, and website administrators who want to quickly populate their WordPress site with realistic dummy content. It saves time and effort by automatically generating content that mimics real posts and pages, enabling you to focus on other aspects of website development or testing. 
 * Version:           3.4.4
 * Author:            Deepak anand
 * Author URI:        https://wpdcg.online/about-us/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp_dummy_content_generator
 * WC tested up to:   9.0.2
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'wp_dummy_content_generator_PLUGIN_NAME_VERSION', '3.4.4' );
define( 'wp_dummy_content_generator_PLUGIN_BASE_URL',plugin_basename( __FILE__ )); 
define( 'wp_dummy_content_generator_PLUGIN_BASE_URI',plugin_dir_path( __FILE__ )); 
define("wp_dummy_content_generator_PLUGIN_DIR",plugin_basename( __DIR__ ));
define("wp_dummy_content_generator_PLUGIN_NAME",'WP Dummy Content Generator');
/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp_dummy_content_generator-activator.php
 */
function activate_wp_dummy_content_generator() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp_dummy_content_generator-activator.php';
	wp_dummy_content_generator_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp_dummy_content_generator-deactivator.php
 */
function deactivate_wp_dummy_content_generator() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp_dummy_content_generator-deactivator.php';
	wp_dummy_content_generator_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wp_dummy_content_generator' );
register_deactivation_hook( __FILE__, 'deactivate_wp_dummy_content_generator' );

require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp_dummy_content_generator.php';

add_action("wp_loaded","wp_dummy_content_generatorAllLoaded");
function wp_dummy_content_generatorAllLoaded(){
  require_once plugin_dir_path( __FILE__ ) . 'includes/functions.php';
  require_once plugin_dir_path( __FILE__ ) . 'includes/functions-posts.php';
  require_once plugin_dir_path( __FILE__ ) . 'includes/functions-users.php';
  require_once plugin_dir_path( __FILE__ ) . 'includes/functions-products.php';
  require_once plugin_dir_path( __FILE__ ) . 'includes/functions-thumbnails.php';
}


add_action( 'before_woocommerce_init', function() {
	if ( class_exists( \Automattic\WooCommerce\Utilities\FeaturesUtil::class ) ) {
		\Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility( 'custom_order_tables', __FILE__, true );
	}
} );


/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_dummy_content_generator() {

	$plugin = new wp_dummy_content_generator();
	$plugin->run();

}
run_wp_dummy_content_generator();
