<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hczvvprohosting_hola_home' );

/** Database username */
define( 'DB_USER', 'hczvvprohosting_NHThihi' );

/** Database password */
define( 'DB_PASSWORD', 'a3hOmWc*=Z3F' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Y>4tN!i_NFe+ O^T?(7~+4?2Rkx-CY:a;9+$5IBV@c+rF!(|J^ZX1?G:-:QN#V@d' );
define( 'SECURE_AUTH_KEY',  '+50okpC}I@fTVa0Dd]b:tAN4-6]@(8h</R=dY;([nF=^/It)!^ @FhhT6RK^:^oX' );
define( 'LOGGED_IN_KEY',    'fG1`EkJcK&`ugH#ECNX~S2Cz6m)q/6 7)h2mR3`QVJ{2I!!NM_BZ! A$7KUTLp]%' );
define( 'NONCE_KEY',        ')j:F+@p=[FfnO`MWxdpB%=f17<5j023c-c_{+H0qoJ}P19rotbSA*g%G4dd:ehC%' );
define( 'AUTH_SALT',        '`O!@s`L/612dRMDg!%N``l-M0DWpQmFdp$ zR5TbJf a$> P1 qR7t6PWv8Z*cC8' );
define( 'SECURE_AUTH_SALT', 'f+ @|t1F#q|e)pjYu,gh;Q&|#CtWKU1 s.}hK8GgkTtm<GW,PoNcf7 JjXAgJCvf' );
define( 'LOGGED_IN_SALT',   'V9FH`EqSG.Q-;v}l uK}?-^R#<n &{&Ho+e73TvzU}mB8Tnw)k867Aj|@&e:?`3z' );
define( 'NONCE_SALT',       'W97i/pO)&L<L.(GM>5M>])xZz9_%cx{ ^!CFv0&3*CI+!8` <bX;}]8NZTA5zD?5' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
