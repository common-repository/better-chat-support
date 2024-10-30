<?php
 /**
  * 
  * @package    Messenger chat support - WordPress plugin
  * @version    1.0
  * @author     ThemeAtelier
  * @Websites: https://themeatelier.net/
  *
  */
 if( ! defined( 'ABSPATH' ) ) {
    die( MCS_ALERT_MSG );
}

if( !class_exists( 'Mcs_Enqueue' ) ){
	class Mcs_Enqueue{
		public function __construct( $args = array() ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'frontend_enqueue_scripts' ) );
		}
		// Front-End enqueue scripts
		public function frontend_enqueue_scripts() {
			wp_enqueue_style( 'fontawesome', MCS_DIR_URL.'assets/css/all.min.css', array(), '1.0', false );
			wp_enqueue_style( 'mcs-main', MCS_DIR_URL.'assets/css/mSupport-main.css', array(), '1.0', false );
			/********************
				Js Enqueue
			********************/
			wp_enqueue_script('moment', array('jquery'), '1.0',true);
			wp_enqueue_script( 'moment-timezone', MCS_DIR_URL.'assets/js/moment-timezone-with-data.min.js', array('jquery'), '1.0', true );
			wp_enqueue_script( 'mcs-main', MCS_DIR_URL.'assets/js/mSupport-main.js', array('jquery'), '1.0', true );
			
		}
	}

	$obj = new Mcs_Enqueue();
}

