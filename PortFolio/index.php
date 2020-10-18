<!DOCTYPE html>
<html class="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths" lang="fr-FR">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

		<META NAME="TITLE" CONTENT="CV en ligne de DEVILLIERS Matthieu">
		<META NAME="AUTHOR" CONTENT="DEVILLIERS Matthieu">
		<META NAME="DESCRIPTION" CONTENT="Ce CV en ligne me permet de me présenter plus facilement et avec toutes mes expériences professionnelles ainsi que mes différentes réalisations et réseaux sociaux.">
		<META NAME="KEYWORDS" CONTENT="cv,recrutement,alternance,expériences,curriculum vitae">
		<META NAME="OWNER" CONTENT="DEVILLIERS Matthieu">
		<META NAME="ROBOTS" CONTENT="index,all">
		<META NAME="Reply-to" CONTENT="matthieu@devilliers.fr">
		<META NAME="REVISIT-AFTER" CONTENT="10">

		<title>CV en ligne - DEVILLIERS Matthieu</title>
		<link rel="icon" href="image/Google_Assistant_logo.ico">
		
		<?php
			include("access/google_analytics.php");
		?>

		<script
			src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
			data-auto-a11y="true"
		></script>
		<script src="js/wp-emoji-release.min.js" defer=""></script>
		<script src="js/jquery.js"></script>
		<script src="js/jquery-migrate.min.js"></script>
		<script src="js/modernizr.custom.js"></script>

		<link rel="stylesheet" href="css/styles.pure.css" type="text/css">
	</head>

	<body class="page-template page-template-page-fullwidth page-template-page-fullwidth-php page page-id-191 theme-arlo woocommerce-js elementor-default elementor-kit-221 elementor-page elementor-page-191" data-elementor-device-mode="desktop">

		<!-- WRAPPER ALL -->
		<div class="arlo_fn_wrapper_all disable  preloader_loaded" data-nav-skin="light" data-mobile-autocollapse="disable" data-nav-type="sidebar" data-submenu-skin="dark">
	
			<!-- get moving submenu if sidebar navigation is selected -->
			<div id="arlo_fn_fixedsub" style="left: 400px;">
				<ul></ul>
			</div>
		
			<div id="arlo_fn_moving_trigger" style="left: -651.5px;">
				<ul></ul>
			</div>
		
			<!-- get preloader if preloader is enabled from Theme Options-->
			<div class="arlo_fn_preloader fn_dark">
				<div class="spinner_wrap">
					<div class="arlo_fn_spinner"></div>
				</div>
			</div>	
	
			<!-- WRAPPER -->
			<div class="arlo_fn_wrapper">
				
				<?php include("entete.php"); ?>

				<!-- WRAPPER for HEIGHT -->
				<div class="arlo_fn_all_pages_content">
					<!-- ALL PAGES -->		
					<div class="arlo_fn_all_pages" style="padding-top:0px;padding-bottom:0px;">
						<div class="arlo_fn_all_pages_inner">
							<!-- PAGE -->
							<div data-elementor-type="wp-page" data-elementor-id="191" class="elementor elementor-191" data-elementor-settings="[]">
								<div class="elementor-inner">
									<div class="elementor-section-wrap">
										<?php include("header.php"); ?>
										<?php include("presentation.php"); ?>
										<?php include("competences.php"); ?>
										<?php include("realisation.php"); ?>
										<?php include("experiences.php"); ?>
										<?php include("recommandation.php"); ?>
										<?php include("contact.php"); ?>
									</div>
								</div>
							</div>
							<!-- /PAGE -->
						</div>
					</div>		
					<!-- /ALL PAGES -->
				</div>
				<!-- /WRAPPER for HEIGHT -->

				<?php include("footer.php"); ?>

			</div>
		</div>
		<!-- / WRAPPER ALL -->
		<script>
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		</script>
		<script src="js/scripts.js"></script>
		<script src="js/jquery.blockUI.min.js"></script>
		<script>
			/* <![CDATA[ */
			var wc_add_to_cart_params = {"ajax_url":"\/envato\/frenify\/wp\/arlo\/1\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/envato\/frenify\/wp\/arlo\/1\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"http:\/\/frenify.com\/envato\/frenify\/wp\/arlo\/1\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
			/* ]]> */
		</script>
		<script src="js/add-to-cart.min.js"></script>
		<script src="js/js.cookie.min.js"></script>
		<script>
			/* <![CDATA[ */
			var woocommerce_params = {"ajax_url":"\/envato\/frenify\/wp\/arlo\/1\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/envato\/frenify\/wp\/arlo\/1\/?wc-ajax=%%endpoint%%"};
			/* ]]> */
		</script>
		<script src="/js/woocommerce.min.js"></script>
		<script>
			/* <![CDATA[ */
			var wc_cart_fragments_params = {"ajax_url":"\/envato\/frenify\/wp\/arlo\/1\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/envato\/frenify\/wp\/arlo\/1\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_424e7bb0a9b984e5733a1cb06915c134","fragment_name":"wc_fragments_424e7bb0a9b984e5733a1cb06915c134","request_timeout":"5000"};
			/* ]]> */
		</script>
		<script src="js/cart-fragments.min.js"></script>
		<script>
			jQuery( 'body' ).bind( 'wc_fragments_refreshed', function() {
				var jetpackLazyImagesLoadEvent;
				try {
					jetpackLazyImagesLoadEvent = new Event( 'jetpack-lazy-images-load', {
						bubbles: true,
						cancelable: true
					} );
				} catch ( e ) {
					jetpackLazyImagesLoadEvent = document.createEvent( 'Event' )
					jetpackLazyImagesLoadEvent.initEvent( 'jetpack-lazy-images-load', true, true );
				}
				jQuery( 'body' ).get( 0 ).dispatchEvent( jetpackLazyImagesLoadEvent );
			} );
		</script>
		<script src="js/isotope.js"></script>
		<script src="js/select2.full.min.js"></script>
		<script src="js/justified.js"></script>
		<script src="js/lightgallery.js"></script>
		<script src="js/magnific.popup.js"></script>
		<script src="js/owl.carousel.js"></script>
		<script src="js/woocommerce.js"></script>
		<script>
			/* <![CDATA[ */
			var fn_ajax_object = {"fn_ajax_url":"http:\/\/frenify.com\/envato\/frenify\/wp\/arlo\/1\/wp-admin\/admin-ajax.php"};
			/* ]]> */
		</script>
		<script src="js/init.js"></script>
		<script src="js/comment-reply.min.js"></script>
		<script src="js/wp-embed.min.js"></script>
		<script src="js/frontend-modules.min.js"></script>
		<script src="js/position.min.js"></script>
		<script src="js/dialog.min.js"></script>
		<script src="js/waypoints.min.js"></script>
		<script src="js/share-link.min.js"></script>
		<script>
			var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","downloadImage":"Download image"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"version":"2.9.7","urls":{"assets":"http:\/\/frenify.com\/envato\/frenify\/wp\/arlo\/1\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"general":{"elementor_global_image_lightbox":"yes","elementor_lightbox_enable_counter":"yes","elementor_lightbox_enable_fullscreen":"yes","elementor_lightbox_enable_zoom":"yes","elementor_lightbox_enable_share":"yes","elementor_lightbox_title_src":"title","elementor_lightbox_description_src":"description"},"editorPreferences":[]},"post":{"id":191,"title":"Home%20Elegant%20%E2%80%93%20Arlo","excerpt":"","featuredImage":false}};
		</script>
		<script src="js/frontend.min.js"></script><span id="elementor-device-mode" class="elementor-screen-only"></span>
		<script src="js/ripples.js"></script>
		<script src="js/glitch.js"></script>
		<script src="js/fullpage.extensions.min.js"></script>
		<script src="js/flickity.js"></script>
		<script src="js/particles.js"></script>
		<script src="js/jarallax.js"></script>
		<script src="js/typed.js"></script>
		<script src="js/accordion.js"></script>
		<script src="js/countto.js"></script>
		<script src="js/waypoints.js"></script>
		<script src="js/kenburnsy.js"></script>
		<script src="js/parallax.js"></script>
		<script src="js/frel_parallax.js"></script>
		<script src="js/jquery.hover3d.min.js"></script>
		<script src="js/inito.js"></script>

		<div id="ascrail2000" class="nicescroll-rails" style="width: 0px; z-index: 100; cursor: default; position: absolute; top: 245px; left: 400px; height: 420px; display: none;">
			<div style="position: relative; top: 0px; float: right; width: 0px; height: 0px; background-color: rgb(66, 66, 66); border: 0px solid rgb(51, 51, 51); background-clip: padding-box; border-radius: 5px;"></div>
		</div>
		<div id="ascrail2000-hr" class="nicescroll-rails" style="height: 0px; z-index: 100; top: 665px; left: 0px; position: absolute; cursor: default; display: none;">
			<div style="position: relative; top: 0px; height: 0px; width: 0px; background-color: rgb(66, 66, 66); border: 0px solid rgb(51, 51, 51); background-clip: padding-box; border-radius: 5px;"></div>
		</div>
		<div id="ascrail2001" class="nicescroll-rails" style="width: 0px; z-index: 999999; cursor: default; position: absolute; top: 95px; left: -651.5px; height: 754px; display: none;">
			<div style="position: relative; top: 0px; float: right; width: 0px; height: 0px; background-color: rgb(66, 66, 66); border: 0px solid rgb(51, 51, 51); background-clip: padding-box; border-radius: 5px;"></div>
		</div>
		<div id="ascrail2001-hr" class="nicescroll-rails" style="height: 0px; z-index: 999999; top: 849px; left: -1251.5px; position: absolute; cursor: default; display: none;">
			<div style="position: relative; top: 0px; height: 0px; width: 0px; background-color: rgb(66, 66, 66); border: 0px solid rgb(51, 51, 51); background-clip: padding-box; border-radius: 5px;"></div>
		</div>
	</body>
</html>