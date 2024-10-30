<?php
/*
 *  Plugin Name:    Better chat support
 *  Plugin URI:     https://themeatelier.net/plugins/chat-plugins/
 *  Description:    Can easily create Bubble & buttons for messenger chat in any WordPress site. Gutenberg, Elementor and shortcodes supported. 
 *  Author:         themeatelier
 *  Author URI:     http://themeatelier.net/
 *  Requirements:   PHP 7.0 or above, WordPress 4.0 or above.
 *  Version:       1.2.8
 * Text Domain:  better-chat-support
 * Domain Path:  /languages
 */

// Block Direct access
if (!defined('ABSPATH')) {
    die('You should not access this file directly!.');
}

// Define Constants for direct access alert message.
if (!defined('MCS_ALERT_MSG'))
    define('MCS_ALERT_MSG', esc_html__('You should not access this file directly.!', 'better-chat-support'));

// Define constants for plugin directory path.
if (!defined('MCS_DIR_PATH'))
    define('MCS_DIR_PATH', plugin_dir_path(__FILE__));


// Define constants for view directory path.
if (!defined('MCS_VIEW_DIR_PATH'))
    define('MCS_VIEW_DIR_PATH', MCS_DIR_PATH . 'view/');

// Define constants for elementor widget directory path.
if (!defined('MCS_EW_DIR_PATH'))
    define('MCS_EW_DIR_PATH', MCS_VIEW_DIR_PATH . 'elementor-widgets/');


// Define constants for plugin directory path.
if (!defined('MCS_DIR_URL'))
    define('MCS_DIR_URL', plugin_dir_url(__FILE__));

// load text domain from plugin folder
function mcs_load_textdomain()
{
    load_plugin_textdomain('', false, dirname(__FILE__) . "/languages");
}
add_action("plugins_loaded", 'mcs_load_textdomain');

// Plugin settings in plugin list
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'mcs_settings_link');
function mcs_settings_link(array $links)
{
    $url = get_admin_url() . "admin.php?page=mcs";
    $settings_link = '<a href="' . esc_url($url) . '">' . esc_html__('Settings', 'better-chat-support') . '</a>';
    $links[] = $settings_link;
    return $links;
}

// Pro version link
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'mcs_pro_link');
function mcs_pro_link(array $links)
{
    $url = "https://1.envato.market/Aore4a";
    $settings_link = '<a style="color: #0084ff; font-weight: 700;" href="' . esc_url($url) . '">' . esc_html__('Go Pro!', 'better-chat-support') . '</a>';
    $links[] = $settings_link;
    return $links;
}

// Register block
function create_block_better_chat_support_init()
{
    register_block_type_from_metadata(MCS_VIEW_DIR_PATH . 'blocks/');
}
add_action('init', 'create_block_better_chat_support_init');


// Register block category 

function better_chat_support_plugin_block_categories($categories)
{
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'better-chat-support-block',
                'title' => __('Better Chat Support block', 'better-chat-support'),
            ],
        ]
    );
}
add_action('block_categories', 'better_chat_support_plugin_block_categories', 10, 2);

// Script enqueue class include
require_once MCS_DIR_PATH . 'inc/class-enqueue.php';

// View Shortcodes
require_once MCS_DIR_PATH . '/view/elementor-widgets/elementor-widget.php';
require_once MCS_DIR_PATH . 'view/shortcodes/custom-shortcode.php';

// buttons functions
require_once MCS_DIR_PATH . 'inc/functions.php';
// Button template class
require_once MCS_DIR_PATH . 'inc/class-custom-buttons-templates.php';

// single chat bubble template
require_once MCS_DIR_PATH . '/view/chat-bubbles/chat-bubbles.php';

// include framework for admin panel
require_once MCS_DIR_PATH . 'admin/codestar-framework.php';
require_once MCS_DIR_PATH . 'inc/mcs-plugin-options.php';

/**
 * Initialize the plugin tracker
 *
 * @return void
 */
function messenger_appsero_init()
{

    if (!class_exists('MessengerAppSero\Insights')) {
        require_once MCS_DIR_PATH . 'admin/appsero/Client.php';
    }
    $client = new MessengerAppSero\Client('aeb9778b-0f30-471a-ad31-5baf7cd160c5', 'Better Messenger Chat Support', __FILE__);
    // Active insights
    $client->insights()->init();
}

messenger_appsero_init();
