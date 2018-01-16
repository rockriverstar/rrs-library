/*
 * Add HTML5 Placeholder Text to search box
 */
function MYTHEME_form_alter(&$form, &$form_state, $form_id){
  dpm($form_id);
  if($form_id == "views_exposed_form"){
    if (isset($form['search_api_views_fulltext'])) {
            $form['search_api_views_fulltext']['#attributes'] = array('placeholder' => array(t('Search')));
    }
  }
}
