(function (context) {
	'use strict';
	
    function doNothing() {
		return (function (notDefined) {
			return notDefined;
		}());
	}
	
	if (typeof context.doNothing === 'undefined') {
		context.doNothing = doNothing;
	} else {
		throw '`doNothing` was already defined.';
	}
}(this));
