$(document).ready(function() {




    /*  Hamburger Menu & Icon  */
    $('.hamburger').on('click', function(e) {

        e.preventDefault();
        $(this).toggleClass('opned');
        $('header nav').toggleClass('active');

    });




    /*  Advanced search form & Icon  */
    $('#advanced_search_btn').on("click", function(e) {
        e.preventDefault();

        var ads_box = $('.advanced_search');

        if (!ads_box.hasClass('advanced_displayed')) {

            $(this).addClass('active');
            ads_box.stop().fadeIn(200).addClass('advanced_displayed');

        } else {

            $(this).removeClass('active');
            ads_box.stop().fadeOut(200).removeClass('advanced_displayed');

        }

    });

    $(function() {
        $("#check_in_date,#check_out_date").datepicker({
            minDate: 0
        });
    });
    
    
    $(function() {
        $("#populate").on('click', function(e) {
            $("#show_hide").toggle(10);
        });
    });
    
 $(function() {
        $("#min_price").on('click', function(e) {
            	var input=$(this);
            	var min_price=input.val();
	if(min_price){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}


        });
    });

});