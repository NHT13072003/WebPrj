<?php
/**
 * Sets up account-membership-section block, does not format frontend
 *
 * @package blocks/account-membership-section
 **/

namespace PMPro\blocks\account_membership_section;

defined( 'ABSPATH' ) || die( 'File cannot be accessed directly' );

// Only load if Gutenberg is available.
if ( ! function_exists( 'register_block_type' ) ) {
	return;
}

add_action( 'init', __NAMESPACE__ . '\register_dynamic_block' );
/**
 * Register the dynamic block.
 *
 * @since 2.1.0
 *
 * @return void
 */
function register_dynamic_block() {
	// Hook server side rendering into render callback.
	register_block_type(
		'pmpro/account-membership-section', [
			'render_callback' => __NAMESPACE__ . '\render_dynamic_block',
			'attributes'	=> array(
				'title'		=> array(
					'type' => 'string',
					'default' =>  __( 'My Memberships', 'paid-memberships-pro' )
				)
			),
		]
	);
}

/**
 * Server rendering for account-membership-section block.
 *
 * @return string
 **/
function render_dynamic_block( $attributes ) {
	$title = isset( $attributes['title'] ) ? $attributes['title'] : null;
	return pmpro_shortcode_account( array( 'sections' => 'membership', 'title' => $title ) );
}
