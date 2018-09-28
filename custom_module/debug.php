
// settings.local.php
define('DEBUG', TRUE);
define('DEBUG_LEVEL', 9);

define('DEBUG', FALSE);

//
 if (!isset($dbug_start)) {
    $dbug_start = microtime(TRUE);
  }


 if (isset($p['debug'])) {
    define('DEBUG', true);
  } else {
    define('DEBUG', false);
  }
  
  
  
//  
if (DEBUG) dpm(microtime(TRUE) - $dbug_start,__LINE__);


function rlog($var) {
  if (DEBUG) {
    dpm(__LINE__);
    dpm($var);
    dpm(microtime());
    if (DEBUG_LEVEL > 8) {
      dpm(debug_backtrace()[1]['function']); // doesn't work on older versions of PHP
    }
  }
}
