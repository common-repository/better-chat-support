<?php
 /**
  * 
  * @package    Call to dial - WordPress plugin
  * @version    1.0
  * @author     ThemeAtelier
  * @Websites: https://themeatelier.net/
  *
  */
  if( ! defined( 'ABSPATH' ) ) {
    die( MCS_ALERT_MSG );
  }

/**
 * Messenger chat support buttons init
 *
 *
 */

function mcs_buttons_template_init( $args ) {
  $buttonObj = new Mcs_Buttons_Template( $args );

    if( !empty( $args['style'] ) ) {

    // Style Switch
    switch ( $args['style'] ) {
        case '1':
            $buttonObj->mcs_button_s1();
            break;
        case '2':
            $buttonObj->mcs_button_s2();
            break;
        default:
            $buttonObj->mcs_button_s1();
            break;
    }
  }
}

