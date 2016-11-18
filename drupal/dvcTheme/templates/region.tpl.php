<?php if (!empty($content)): ?>
    <?php if (arg(0) == 'profile-customer' && strpos($classes, 'region-content')):
        $classes = 'was-region-content' ?>
    <?php endif; ?>
    <div class="<?php print $classes; ?>">
        <?php print $content; ?>
    </div>
<?php endif; ?>
