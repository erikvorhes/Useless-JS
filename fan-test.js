(function (context) {
    'use strict';
    
    function fanTest () {
        var i = 1;

        while (i) {
            i = i + 1;
            // Let's be nice and not throw errors in browsers that don't have consoles ...
            if (!!console) {
                i < 10000 && console.log('These fans work great!');
                i >= 10000 && console.log('Listen to the music those fans make!');
            }
        }        
    }
    
    context.fanTest = fanTest;
}(this));