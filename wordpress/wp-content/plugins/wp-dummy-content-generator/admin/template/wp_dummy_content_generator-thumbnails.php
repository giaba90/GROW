<?php
$wp_dummy_content_generatorAllThumbnailsObj = wp_dummy_content_generatorGetFakeThumbnailsList();
$wp_dummy_content_generatorAllThumbnails = $wp_dummy_content_generatorAllThumbnailsObj->posts;
?>
<!-- new code -->
<div class="wrap wp_dummy_content_generator_wrapper" id="wp-media-grid" data-search="">
    <h1 class="wp-heading-inline"><?php echo  wp_dummy_content_generator_PLUGIN_NAME ?> <span> - All thumbnails</span></h1>
    <?php if(!empty($wp_dummy_content_generatorAllThumbnails)){ ?>
        <span class="deleteSpan">
            <form action='<?php echo esc_url(admin_url('admin-post.php'))?>' method="">
                <input type="hidden" name="action" value="wp_dummy_content_generator_deletethumbnails" />
                <input type="hidden" name="nonce" value="<?=wp_create_nonce('wpdcg-ajax-nonce')?>" />
                <input type="submit" name="submit" value="Delete dummy thumbnails">
            </form>
        </span>

    <?php } ?>
    <hr class="wp-header-end">
    <?php 
    if(isset($_GET['status'])){
        if($_GET['status'] == 'success'){
            echo '<div class="wp_dummy_content_generator-success-msg">All thumbnails deleted successfully.</div>';
        }else{
            echo '<div class="wp_dummy_content_generator-error-msg">Something went wrong.</div>';
        } ?>
        <hr class="wp-header-end">
        <?php
    } ?>
    <div class="media-frame wp-core-ui mode-grid mode-edit hide-menu">
        <div class="media-frame-content" data-columns="7">
            <div class="attachments-browser hide-sidebar sidebar-for-errors">
                <?php if(!empty($wp_dummy_content_generatorAllThumbnails)){ ?>
                    <ul tabindex="-1" class="attachments ui-sortable ui-sortable-disabled" id="__attachments-view-42">
                        <?php 
                            foreach ($wp_dummy_content_generatorAllThumbnails as $key => $wp_dummy_content_generatorAllThumbnail) { ?>
                                
                                <li tabindex="0" role="checkbox" aria-label="wp_dummy_content_generator_1866" aria-checked="false" data-id="1867" class="attachment save-ready">
                                    <div class="attachment-preview js--select-attachment type-image subtype-jpg landscape">
                                        <div class="thumbnail">
                                            <div class="centered">
                                                <img class="wp_dummy_content_generatorThumbnailsImage" src="<?=wp_get_attachment_url($wp_dummy_content_generatorAllThumbnail->ID)?>" draggable="false" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            <?php } ?>
                    </ul>
                <?php }else{ ?>
                        <p class="no-media">No media files found.</p>
                <?php } ?>
            </div>
        </div>
    </div>
</div>
<!-- new code -->