$(document).ready(function() {

    (function() {

        // selectors
        var line = $('#line'),
            lineIn = $('#line1'),
            lineOut = $('#line2'),
            button = $('.btn'),
            buttonUp = $('#btn1'),
            buttonDown = $('#btn2'),
            moreButton = $('.more_btn'),
            drawerContainer = $('.bottom_drawer_container'),
            percentage = $('.percentage')
        ;

        // line in elastic animation
        function lineInAnimation(){
            var tl = new TimelineMax();

            tl.to(line,.25, {morphSVG:lineIn,ease: Circ.easeOut})
              .to(line, 1, {morphSVG:line,ease: Elastic.easeOut.config(1, 0.3)})
            ;

            return tl ;
        }


        // line in elastic animation
        function lineOutAnimation(){
            var tl = new TimelineMax();

            tl.to(line,.25, {morphSVG:lineOut,ease: Circ.easeOut})
                .to(line, 1, {morphSVG:line,ease: Elastic.easeOut.config(1, 0.3)})
            ;

            return tl ;
        }



        // button mouse Down elastic animation
        function ButtonDownAnimation(){
            var tl = new TimelineMax();

            tl.to(buttonUp,.25, {morphSVG:buttonDown,ease: Circ.easeOut})
            ;

            return tl ;
        }


        // button mouse Up elastic animation
        function ButtonUpAnimation(){
            var tl = new TimelineMax();

            tl.to(buttonUp,1, {morphSVG:buttonUp,ease: Elastic.easeOut.config(1.5, 0.2)})
            ;

            return tl ;
        }




        // micro toggleClick jquery plugin
        jQuery.fn.clickToggle = function(a,b) {
            var ab = [b,a];
            return this.on("click", function(){ ab[this._tog^=1].call(this); });
        };

        // click more button to toggle drawer
        moreButton.clickToggle(function() {
            lineOutAnimation();
            drawerContainer.addClass('open');
            percentage.addClass('shrink');
            $(this).text('Less Details');

        }, function() {
            lineInAnimation();
            drawerContainer.removeClass('open');
            percentage.removeClass('shrink');
            $(this).text('More Details');
        });


        // button click to wiggle
        button.mousedown(function(){
            ButtonDownAnimation();
        });
        button.mouseup(function(){
            ButtonUpAnimation();
        });






    })();

});