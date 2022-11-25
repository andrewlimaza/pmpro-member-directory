<?php

// Register block types
function pmpromd_register_blocks() {

	register_block_type(
		'pmpro-member-directory/directory',
		array(
			'editor_script'   => 'pmpromd-directory-block',
			'render_callback' => 'pmpromd_shortcode',
		)
	);

	wp_register_script(
		'pmpromd-directory-block',
		plugins_url( 'build/directory/block.js', __FILE__ ),
		array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api', 'wp-editor', 'pmpro_admin' )
	);

	register_block_type(
		'pmpro-member-directory/profile',
		array(
			'editor_script'   => 'pmpromd-profile-block',
			'render_callback' => 'pmpromd_profile_shortcode',
		)
	);

	wp_register_script(
		'pmpromd-profile-block',
		plugins_url( 'build/profile/block.js', __FILE__ ),
		array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api', 'wp-editor', 'pmpro_admin' )
	);

}
add_action( 'init', 'pmpromd_register_blocks' );

// Block styling
function pmpromd_register_profile_styling() {
	wp_enqueue_style(
		'pmpromd-block-styling',
		plugins_url( '/css/blocks.css', __DIR__ ),
		array(),
		PMPRO_VERSION
	);
}
add_action( 'enqueue_block_editor_assets', 'pmpromd_register_profile_styling' );
