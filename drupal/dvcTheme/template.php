<?php
/**
 * Implements hook_html_head_alter().
 * This will overwrite the default meta character type tag with HTML5 version.
 */
function dvcTheme_html_head_alter(&$head_elements) {
  $head_elements['system_meta_content_type']['#attributes'] = array(
    'charset' => 'utf-8'
  );
}

/**
 * Insert themed breadcrumb page navigation at top of the node content.
 */
function dvcTheme_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];
  if (!empty($breadcrumb)) {
    // Use CSS to hide titile .element-invisible.
    $output = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
    // comment below line to hide current page to breadcrumb
	$breadcrumb[] = drupal_get_title();
    $output .= '<nav class="breadcrumb">' . implode(' » ', $breadcrumb) . '</nav>';
    return $output;
  }
}

/**
 * Override or insert variables into the page template.
 */
function dvcTheme_preprocess_page(&$vars) {
  if (isset($vars['main_menu'])) {
    $vars['main_menu'] = theme('links__system_main_menu', array(
      'links' => $vars['main_menu'],
      'attributes' => array(
        'class' => array('links', 'main-menu', 'clearfix'),
      ),
      'heading' => array(
        'text' => t('Main menu'),
        'level' => 'h2',
        'class' => array('element-invisible'),
      )
    ));
    if(isset($vars['page']['header']['system_main-menu'][1155]['#below'])){
      $parents = $vars['page']['header']['system_main-menu'][1155]['#below'];
        foreach ($parents as $key => $value) {
          if(isset($value)){
            if(isset($value['#href'])){
              $link  = $value['#href'];
              $trim = str_replace("taxonomy/term", "node/add/task", $link);
              $value['#href'] = $trim;
              $parents[$key]['#href'] = $trim;
            }
            if(isset($value['#below'])){
              $child = $value['#below'];
              foreach ($child as $chkey => $chvalue) {
                if(isset($chvalue['#href'])){
                  $link  = $chvalue['#href'];
                  $trim = str_replace("taxonomy/term", "node/add/task", $link);
                  $chvalue['#href'] = $trim;
                  $parents[$key]['#below'][$chkey]['#href'] = $trim;
                }
              }
            }          
          }
        }
        $vars['page']['header']['system_main-menu'][1155]['#below'] = $parents;
    }
  }

  else {
    $vars['main_menu'] = FALSE;
  }
  if (isset($vars['secondary_menu'])) {
    $vars['secondary_menu'] = theme('links__system_secondary_menu', array(
      'links' => $vars['secondary_menu'],
      'attributes' => array(
        'class' => array('links', 'secondary-menu', 'clearfix'),
      ),
      'heading' => array(
        'text' => t('Secondary menu'),
        'level' => 'h2',
        'class' => array('element-invisible'),
      )
    ));
  }
  else {
    $vars['secondary_menu'] = FALSE;
  }
  // <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  $viewport = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' =>  'viewport',
      'content' =>  'width=device-width'
    )
  );
  drupal_add_html_head($viewport, 'viewport');
}

/**
 * Duplicate of theme_menu_local_tasks() but adds clearfix to tabs.
 */
function dvcTheme_menu_local_tasks(&$variables) {
  $output = '';

  if (!empty($variables['primary'])) {
    $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
    $variables['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';
    $variables['primary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['primary']);
  }
  if (!empty($variables['secondary'])) {
    $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
    $variables['secondary']['#prefix'] .= '<ul class="tabs secondary clearfix">';
    $variables['secondary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['secondary']);
  }
  return $output;
}

/**
 * Override or insert variables into the node template.
 */
function dvcTheme_preprocess_node(&$variables) {
  $node = $variables['node'];
  if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
    $variables['classes_array'][] = 'node-full';
  }
}

function dvcTheme_css_alter(&$css) {
  unset($css['sites/all/modules/contrib/panels/css/panels.css']);
  $exclude = array(
    'modules/system/system.menus.css' => FALSE,
    'modules/system/system.theme.css' => FALSE,
    'sites/all/modules/contrib/panels/css/panels.css' => FALSE,
  );
  $css = array_diff_key($css, $exclude);
}

function dvcTheme_panels_default_style_render_region($vars) {
  $output = '';
  $output .= implode('', $vars['panes']);
  return $output;
}
