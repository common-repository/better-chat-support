<?php
 
class Mcs_Buttons_Template {
   public static $getData;

   function __construct( array $args ) {
      self::$getData = $args;
   }
   // Template Style 1
   public function mcs_button_s1() {
   $iterateData = self::$getData;
   $atts = $iterateData;

   // button settings
   $fbid =  $atts['fbid'];

   // visibility
   if ($atts['visibility'] == 'only-desktop') {
      $buttonVisibility = 'mSupport-desktop-only';
    } elseif ($atts['visibility'] == 'only-tablet') {
      $buttonVisibility = 'mSupport-tablet-only';
    } elseif ($atts['visibility'] == 'only-tablet-mobile') {
      $buttonVisibility = 'mSupport-mobile-tablet-only';
    } else {
      echo "";
    }

   $buttonRounded = $atts['rounded'];
   $buttonSizes = $atts['sizes'];
   $agentPhoto = $atts['photo'];
   $agentName = $atts['name'];
   $agentDesignation = $atts['designation'];
   $labelText = $atts['label'];
   $onlineText = $atts['online'];
   $offlineText = $atts['offline'];
   // availablity
   $avlTimezone =  $atts['timezone'];
   $avlSunday = $atts['sunday'];
   $avlMonday = $atts['monday'];
   $avlTuesday = $atts['tuesday'];
   $avlWednesday = $atts['wednesday'];
   $avlThursday = $atts['thursday'];
   $avlFriday = $atts['friday'];
   $avlSaturday = $atts['saturday'];
?>
<div class="button-wrapper">
      <button <?php if( $avlTimezone) { ?> data-timezone="<?php esc_attr($avlTimezone); ?>" <?php } ?> class="mSupportButtons mSupport-button-4 mSupport-btn-bg <?php echo esc_attr($buttonVisibility); ?> <?php echo esc_attr($buttonRounded); ?> avatar-active <?php echo esc_attr($buttonSizes); ?>"  data-btnavailablety='{ "sunday":"<?php echo esc_attr( $avlSunday);?>", "monday":"<?php echo esc_attr( $avlMonday);?>", "tuesday":"<?php echo esc_attr( $avlTuesday);?>", "wednesday":"<?php echo esc_attr( $avlWednesday);?>", "thursday":"<?php echo esc_attr( $avlThursday);?>", "friday":"<?php echo esc_attr( $avlFriday);?>", "saturday":"<?php echo esc_attr( $avlSaturday);?>" }'>
         <?php if ($agentPhoto) { ?>
            <img src="<?php echo esc_attr( $agentPhoto ); ?>"/>
         <?php } ?>

            <div class="info-wrapper">
            <?php if( $agentName || $agentDesignation ) { ?>
               <p class="info"><?php if( $agentName ) { ?><?php echo esc_html( $agentName ); ?><?php } ?> <?php if( $agentDesignation ) { ?>/ <?php echo esc_html( $agentDesignation ); ?><?php } ?></p>
            <?php } ?>
            <?php if( $labelText ) { ?>
               <p class="title"><?php echo esc_html( $labelText ); ?></p>
            <?php } ?>
            <?php if( $onlineText ) { ?>
               <p class="online"><?php echo esc_html( $onlineText ); ?></p>
            <?php } ?>
            <?php if( $offlineText ) { ?>
               <p class="offline"><?php echo esc_html( $offlineText ); ?></p>
               <?php } ?>
            </div>
            <a href="https://www.m.me/<?php echo esc_attr($fbid); ?>" target="_blank"></a>
            </button>
   </div>
      <?php
   } 

   // // Template style 2
   function mcs_button_s2 () {
      $iterateData = self::$getData;
      $atts = $iterateData;
      $fbid = esc_attr( $atts['fbid'] );
         // visibility
   if ($atts['visibility'] == 'only-desktop') {
      $buttonVisibility = 'mSupport-desktop-only';
    } elseif ($atts['visibility'] == 'only-tablet') {
      $buttonVisibility = 'mSupport-tablet-only';
    } elseif ($atts['visibility'] == 'only-tablet-mobile') {
      $buttonVisibility = 'mSupport-mobile-tablet-only';
    } else {
      echo "";
    }
      $buttonSizes = $atts['sizes'];
      $buttonRounded = $atts['rounded'];
      $labelText = $atts['label'];
      ?>

      <div class="button-wrapper">
         <a href="https://www.m.me/<?php echo esc_attr($fbid); ?>" class="mSupport-button-2 mSupport-btn-bg <?php echo esc_attr($buttonSizes); ?> <?php echo esc_attr($buttonVisibility); ?> <?php echo esc_attr($buttonRounded); ?>" >
         <i class="fab fa-facebook-messenger"></i><?php echo esc_attr($labelText); ?>
         </a>
      </div>
      <?php
   }

} // End Class