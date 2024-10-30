<?php 
 /**
  * 
  * @package    Click to dial Wp plugin
  * @version    1.0
  * @author     ThemeAtelier
  * @Websites: https://themeatelier.net/
  *
  */

add_shortcode( 'mcs' , 'mcs_custom_buttons_shortcode' );
function mcs_custom_buttons_shortcode( $atts ) {
		$atts = shortcode_atts( array(
        'style' => '1',
        'photo' => MCS_DIR_URL . 'assets/image/user.webp',
        'name' => esc_html__('Robert', 'better-chat-support'),
        'designation' => esc_html__('Sales Support', 'better-chat-support'),
        'label' => esc_html__('How can I help you?', 'better-chat-support'),
        'online' => esc_html__('I\'m avaiable', 'better-chat-support'),
        'offline'  => esc_html__('I\'m offline', 'better-chat-support'),
        'fbid' => esc_html__('ThemeAtelier', 'better-chat-support'),
        'visibility' => 'mSupport-show-everywhere',
        'sizes' => 'mSupport-btn-md',
        'rounded' => 'mSupport-btn-rounded',
        'sunday' => esc_html__('00:00-23:59', 'better-chat-support'),
        'monday' => esc_html__('00:00-23:59', 'better-chat-support'),
        'tuesday' => esc_html__('00:00-23:59', 'better-chat-support'),
        'wednesday' => esc_html__('00:00-23:59', 'better-chat-support'),
        'thursday' => esc_html__('00:00-23:59', 'better-chat-support'),
        'friday' => esc_html__('00:00-23:59', 'better-chat-support'),
        'saturday' => esc_html__('00:00-23:59', 'better-chat-support'),
		), $atts );

	ob_start();

	mcs_buttons_template_init( $atts );

return ob_get_clean();
}