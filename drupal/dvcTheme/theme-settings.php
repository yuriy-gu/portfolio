<?php
/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @param array $form
 *   The form.
 * @param array $form_state
 *   The form state.
 */
function dvcTheme_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['prof_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Professional Theme Settings'),
    '#collapsible' => FALSE,
    '#collapsed' => FALSE,
  );
  $form['prof_settings']['breadcrumbs'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show breadcrumbs in a page'),
    '#default_value' => theme_get_setting('breadcrumbs'),
    '#description'   => t("Check this option to show breadcrumbs in page. Uncheck to hide."),
  );
}

