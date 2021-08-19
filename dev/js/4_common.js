//  START PRELOADER
loader();
    $('.preloader').show();
    function loader(_success) {
        var obj 	= document.querySelector('.preloader'),
        line 	= document.querySelector('.preloader_line'),
        num 	= document.querySelector('.preloader_num');
        $('.preloader + section, .preloader + header, .preloader + header + section').css('display', 'block');

        var w = 0,
        t = setInterval(function () {
            w = w + 1;
            line.style.width = w + '%';
            num.textContent = w + '%';
            if (w === 100) {
                obj.style.display = 'none' ;
                clearInterval(t);

                w = 0;
                if (_success) {
                    return _success();
                }
            }
        }, 20);
    };
//END PRELOADER
if($('.slider-height').length){
    var sliderHeight = $('.slider-height').val().replace(/,/, ' - '),
        sliderWight = $('.slider-weight').val().replace(/,/, ' - ');
        $('.slider-height').prev().html(sliderHeight + 'cm');
        $('.slider-weight').prev().html(sliderWight + 'kg');
}
if ($('input[type="password"]').length) {
    $('body').on('click', '.input .icon-eye', function(){
        if($(this).prev().prev().attr('type') === "password") {
            $(this).prev().prev().attr('type',"text");
        }else{
            $(this).prev().prev().attr('type',"password");
        }
    });
}
// Forma
if($('.register').length){
    $('.register .submit').on('click', function(){
        var selectEl = $('.register .select span'),
            selectValue;
        if (selectEl) {
            selectValue = selectEl.attr("data-options");

            if (selectValue.toLowerCase() != "country") {
                console.log("it's valid");
                $('.select span').removeClass('error');
                $('.select span').addClass('success');
            }else{
                $('.select span').removeClass('success');
                $('.select span').addClass('error');
            }
        }
    });
    $('.register input').each(function(){
        $(this).on('keyup', function(e) {
            $('.register form input').each(function() {
            var name = $(this).attr('id'),
               val = $(this).val();


            switch (name) {
                case 'first-Name':
                    nameValid(this);
                    break;
                case 'last-Name':
                    nameValid(this);
                    break;

                case 'email':
                    email(this);
                    break;
                case 'password':
                    password(this);
                    break;
                }
                function nameValid(_this){

                    console.log("works")
                    //console.log(rv_name.test(val))
                    console.log(val.length)

                    var rv_name = /^[a-zA-Z]+$/,
                       that =_this;
                    if (val.length > 4 && rv_name.test(val)) {
                        console.log(val)
                        $(that).removeClass('error').addClass('success');
                        $(that).next().hide();
                    } else {
                        $(that).removeClass('success').addClass('error');
                        $(that).next().show();
                    }
                 }
                function password(_this){
                    var rv_name = /^[a-zA-Z0-9]+$/,
                       that =_this;
                    if (val.length > 6 && rv_name.test(val)) {
                        $(that).removeClass('error').addClass('success');
                        $(that).next().hide();
                    } else {
                        $(that).removeClass('success').addClass('error');
                        $(that).next().show();
                    }
                }

                function email(_this) {
                    var rv_mail = /.+@.+\..+/i,
                       that =_this;
                    if (val !== '' && rv_mail.test(val)) {
                        $(that).removeClass('error').addClass('success');
                        $(that).next().hide();
                    } else {
                        $(that).removeClass('success').addClass('error');
                        $(that).next().show();
                   }
                 }
             });

        });
    });
}
// End form

$(document).ready(function(){

    $(window).on('resize', function () {
        if ($(window).width() > 767) {
            $('.register-page').niceScroll({
                cursorcolor:"#F5576C",
                zindex:[200]
            });
            $('.content, .sitebar').niceScroll({
                cursorcolor:"#F5576C",
            });
        }
    });
    if ($(window).width() > 767) {
        $('.register-page').niceScroll({
                cursorcolor:"#F5576C",
                zindex:[200]
        });
        $('.content, .sitebar').niceScroll({
            cursorcolor:"#F5576C",
        });
    }



    $('.reviews-slider').slick({
        arrows:false,
        dots:true,
    });
    $('.woman-slider').slick();
    $('.slider-height').jRange({
        from: 150,
        to: 200,
        step: 1,
        format: '%s',
        width: 190,
        showLabels: true,
        isRange : true,
        theme:'theme-red',
        showScale:false,
        showLabels:false,
        onstatechange: function() {

            var  sliderHeight = $('.slider-height').val().replace(/,/, ' - ');
            $('.slider-height').prev().html(sliderHeight + 'cm');
        }
    });
    $('.slider-weight').jRange({
        from: 40,
        to: 200,
        step: 1,
        format: '%s',
        width: 190,
        showLabels: true,
        isRange : true,
        theme:'theme-red',
        showScale:false,
        showLabels:false,
        onstatechange: function() {

            var sliderWight = $('.slider-weight').val().replace(/,/, ' - ');
                $('.slider-weight').prev().html(sliderWight + 'kg');
        }
    });

    $('.select ul').niceScroll({
        cursorcolor:"transparent",
        cursorborder:"1px solid transparent"
    });
    $('body').on('click', '.filter-button', function(){
        $('.filter-bottom').slideToggle();
        setTimeout(function(){
            $(".content").getNiceScroll().resize();
        },500);
    });
    $('body').on('click', '.woman .icon-star, .photos .icon-star' , function(){
       $(this).toggleClass('icon-star_active');
    });

    $('body').on('click', '.replenishment input[type="radio"]', function(){
        if($('input').prop('checked')){
            $('.item').removeClass('active');
            $(this).parent().addClass('active');
        }else{
            $('.item').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $('body').on('click', '.gifts-items input[type="checkbox"]', function(){
        $(this).parent().toggleClass('active');
    });

    $('body').on('click', '.more', function(){
        $(this).addClass('active');
    });





    if($('.select').length){
        $('.select').each(function(){
            var selectText = $(this).find('li:first-child').html(),
                selectDataOptions = $(this).find('li:first-child').html(),
                select = $(this).find('li:first-child');
            $(this).parent().find('span').html(selectText);
            $(this).parent().find('span').attr('data-options', selectText) ;
            select.addClass('hide')
            $('body').on('click','.select li', function(){
                var selectOptions = $(this).html();
                $(this).parent().find('li').removeClass('hide');
                $(this).addClass('hide')
                $(this).parent().parent().find('span').html(selectOptions);
                $(this).parent().parent().find('span').attr('data-options', selectOptions);
                $('.select span').removeClass('active');
                $('.select span').next().slideUp(100);
            });
        });
    }
    $('body').on('click','.select span', function(){
        if($(this).hasClass('active')){
            $(this).next().slideUp(100);
            $('.select span').removeClass('active');
        }else{
            $('.select span').removeClass('active');
            $(this).addClass('active');
            $('.select span').next().slideUp();
            $(this).next().slideDown(100);

        }
    });
    $('body').on('click', '.header-mobile .burger-menu', function(){
        $('.sitebar').toggleClass('open');
        $(this).toggleClass('close');
    });
    $('body').on('click', 'header .burger-menu', function(){
        $('.login').toggleClass('open');
        $(this).toggleClass('close');
    });
    $('body').on('click', '.settings i', function(){
        $('.settings-menu').toggleClass('open');
    });
    if($('#id').length){
        var n = document.getElementById('id');

        n.addEventListener('keypress', function(e){
          if(e.ctrlKey === true || e.metaKey === true){
            return;
          }
          if(e.code != undefined){
            if(!/(Digit|Backspace|Numpad[0-9]|Tab|Arrow)/.test(e.code)){
              e.preventDefault();
              e.stopPropagation();
            }
            return;
          }
          if(e.keyCode != undefined){
            if(e.keyCode < 48 || e.keyCode > 57){
              e.preventDefault();
              e.stopPropagation();
              return;
            }
          }
        });
    }
    $('body').on('click', '.search-item .icon-close', function(){
        $(this).parent().hide();
    });
    //==============================================================================
	// ADD FILE
	//==============================================================================

    $('#load-photo').change(function() {
        console.log(readURL(this));
    });
    $('#add-file').change(function() {
        var nameFile = this.files[0].name;
        $('.file-name').html(nameFile);
    });

    function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var contLength = $("#preview").children().length;
            var inputPhoto = "<div class='radio-button'><input type='radio' id=photo-"+ contLength +" name='avatar'><label for='photo-"+ contLength +"'>Avatar Photo</label></div>";
            var templImg = "<div class='item-photo'><div class='img' style='background-image: url("+e.target.result+")'><i class='icon-close'></i></div>"+inputPhoto+"</div>";
            $('#preview').append(templImg);
            $(".icon-close").click(function(){
                $(this).parent().parent().remove();
            });
        };

        reader.readAsDataURL(input.files[0]);
        }
    }
        if ($(window).width() > 767) {
            $('body').on('click', '.show-letters', function(){
                var nameWoman = $(this).parent().find('h2 span').text();
                if($(this).parent().parent().hasClass('open')){
                    $('.left-block .open').removeClass('open');
                    $(this).parent().parent().removeClass('open');
                    $('.read-message > .right-block').hide();
                }else{
                    $(this).parent().parent().addClass('open');
                    $('.read-message > .right-block').show();
                    setTimeout(function(){
                        $(".content").getNiceScroll().resize();
                    },500);
                }
            });

        }else{
             $('body').on('click', '.show-letters', function(){
                var nameWoman = $(this).parent().find('h2 span').text();
                if($(this).parent().parent().hasClass('open')){
                    $('.left-block .open').removeClass('open');
                    $(this).parent().parent().removeClass('open');
                    $('.read-message > .right-block').hide();
                    $('.read-message > .left-block').show();
                }else{

                    $(this).parent().parent().addClass('open');
                    $('.read-message > .right-block').show();
                    $('.read-message > .left-block').hide();
                    $('.read-message > .right-block').prepend('<i class="icon-next back-massage">' + nameWoman + '</i>');
                    setTimeout(function(){
                        $(".content").getNiceScroll().resize();
                    },500);
                }
            });
            $('body').on('click', '.back-massage', function(){
                $(this).remove();
                $('.read-message > .right-block').hide();
                $('.read-message > .left-block').show();
            });
        }
});
