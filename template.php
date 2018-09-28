<?php

/*
 * Set the "HTML5 placeholder" value of a text field in a form
 * 'case' line holds ID of the <form>
 * $form[''] holds the NAME from the <input> element
 */
 
function THEME_form_alter(&$form, &$form_state, $form_id) {
  //dpm($form,$form['#id']);
  switch ($form['#id']) {
    case 'views-exposed-form-site-search-search-pane':
      $form['search_api_views_fulltext']['#attributes']['placeholder'] = t('Search');
      break;
  }
}
