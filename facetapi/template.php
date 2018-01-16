<?php

/*  style facet counts */
function MYTHEME_facetapi_count($variables) {
  return '<span class="facetapi_count">' . (int) $variables['count'] . '</span>';
}
