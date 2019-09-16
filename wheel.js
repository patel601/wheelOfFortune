
$(window).load(function() { //start after HTML, images have loaded

    var InfiniteRotator =
        {
            init: function()
            {
                //initial fade-in time (in milliseconds)
                var initialFadeIn = 200;

                //interval between items (in milliseconds)
                var itemInterval = 200;

                //cross-fade time (in milliseconds)
                var fadeTime = 100;

                //count number of items
                var numberOfItems = $('.wheel-item').length;

                //set current item
                var currentItem = 0;

                //show first item
                $('.wheel-item').eq(currentItem).fadeIn(initialFadeIn);

                //loop through the items
                var infiniteLoop = setInterval(function(){
                    $('.wheel-item').eq(currentItem).fadeOut(fadeTime);

                    if(currentItem == numberOfItems -1){
                        currentItem = 0;
                    }else{
                        currentItem++;
                    }
                    $('.wheel-item').eq(currentItem).fadeIn(fadeTime);

                }, itemInterval);
            }
        };

    InfiniteRotator.init();

});




