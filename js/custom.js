$.datepicker.regional['es'] = {
 closeText: 'Cerrar',
 prevText: '< Ant',
 nextText: 'Sig >',
 currentText: 'Hoy',
 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
 weekHeader: 'Sm',
 dateFormat: 'dd/mm/yy',
 firstDay: 1,
 isRTL: false,
 showMonthAfterYear: false,
 yearSuffix: ''
 };
 
 $(document).ready(function () {
      AOS.init({
            disable: 'mobile'
        });
      checkcontainer2();
      
      if ($('#form-reserva').length>0) {
		    $( "#fecha-llegada" ).datepicker({ minDate: +1, maxDate: "+12M" ,dateFormat: "dd-mm-yy"});
		    $( "#fecha-salida" ).datepicker({ minDate: +2, maxDate: "+12M" ,dateFormat: "dd-mm-yy"});
		    $("#fecha-llegada").datepicker("setDate", "-0d");
		    $("#fecha-salida").datepicker("setDate", "+1d");
		    //$("select").selectbox();
		}
		
      /**idiomas*/
      if(location.href.includes("/es/")==true){
            $("#block-block-idiomas ul li.es").addClass('active');
            $("#block-block-idiomas ul li.en").removeClass('active');
            $("#block-block-idiomas ul li.fr").removeClass('active');
            $.datepicker.setDefaults($.datepicker.regional['es']);
            $("#block-block-idiomas ul li.es a").attr("href",location.href.replace("/es/", "/es/"));
            $("#block-block-idiomas ul li.en a").attr("href",location.href.replace("/es/", "/en/"));
            $("#block-block-idiomas ul li.fr a").attr("href",location.href.replace("/es/", "/fr/"));
        }
        if(location.href.includes("/en/")==true){
            $("#block-block-idiomas ul li.en").addClass('active');
            $("#block-block-idiomas ul li.es").removeClass('active');
            $("#block-block-idiomas ul li.fr").removeClass('active');
            $.datepicker.setDefaults($.datepicker.regional['en']);
            $("#block-block-idiomas ul li.es a").attr("href",location.href.replace("/en/", "/es/"));
            $("#block-block-idiomas ul li.en a").attr("href",location.href.replace("/en/", "/en/"));
            $("#block-block-idiomas ul li.fr a").attr("href",location.href.replace("/en/", "/fr/"));
        }
        if(location.href.includes("/fr/")==true){
            $("#block-block-idiomas ul li.fr").addClass('active');
            $("#block-block-idiomas ul li.en").removeClass('active');
            $("#block-block-idiomas ul li.es").removeClass('active');
            $.datepicker.setDefaults($.datepicker.regional['fr']);
            $("#block-block-idiomas ul li.es a").attr("href",location.href.replace("/fr/", "/es/"));
            $("#block-block-idiomas ul li.en a").attr("href",location.href.replace("/fr/", "/en/"));
            $("#block-block-idiomas ul li.fr a").attr("href",location.href.replace("/fr/", "/fr/"));
        }
       /** Hero Slider**/
        if ($('.hero-inicio').length) {
            var swiper = new Swiper('.hero-inicio', {
                autoplay: {
                    delay: 5000,
                },
                speed: 1500,
                loop: true,
                autoHeight: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.arr-right',
                    prevEl: '.arr-left',
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.single-slide .t1,.single-slide .t2,.single-slide .t3').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".hero-inicio").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        }
        // == Inicio galeria  Slider== //
        var swiper = new Swiper('.swiper-galeria_inicio1',{
      slidesPerView: 'auto',
      spaceBetween: 20,
      speed: 1500,
      loop: true,
      autoplay: true,
      waitForTransition: true,
      disableOnInteraction: false,
      autoHeight: false,
      //centeredSlides: true,
      pagination: {
        el: '.swiper-paginationgaleria_inicio1',
        clickable: true,
      },
      navigation: {
        nextEl: '.arrini-right',
        prevEl: '.arrini-left',
        },
    });
    /****fin inicio galerioa******/
    
    /*******inidio swiper habiaciones***/
    var swiper = new Swiper(".myRooms", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
        nextEl: '.arrini-right',
        prevEl: '.arrini-left',
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      });
      /**fin swiper hab*****/
    
         // == Exeriecnias Slider== //
        var swiper = new Swiper('.swiper-galeria_promo1',{
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      loop: true,
      autoplay: true,
      waitForTransition: true,
      disableOnInteraction: false,
      autoHeight: false,
      //centeredSlides: true,
      pagination: {
        el: '.swiper-paginationpromodet1',
        clickable: true,
      },
      navigation: {
        nextEl: '.arrpromo-right',
        prevEl: '.arrpromo-left',
      },
    });
    /****fin slider expe******/
    
     // == Clientes Slider== //
        var swiper = new Swiper('.swiper-clientes',{
      slidesPerView: 'auto',
      spaceBetween: 20,
      speed: 1500,
      loop: true,
      autoplay: true,
      waitForTransition: true,
      disableOnInteraction: false,
      autoHeight: false,
      //centeredSlides: true,
      pagination: {
        el: '.swiper-paginationclientes',
        clickable: true,
      },
      navigation: {
        nextEl: '.arrcli-right',
        prevEl: '.arrcli-left',
        },
    });
    /****fin slider expe******/
    
    /********formulario reservar cita********/
    function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

if(jQuery('#form-reserva').length>0){
jQuery('<div id="notification1" class="notif">Gracias por reservar su cita.<br>Pronto nos contactaremos.</div>').insertBefore(jQuery("#contact-message-reservar-cita-form"));

var urlDesktop = 'https://web.whatsapp.com/';
var urlMobile = 'whatsapp://';
var telefono2 = '51950008100';

jQuery('.form-block .form-actions a').click(function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();

				var checkin= "Check in Date: "+jQuery("#fecha-llegada").val();
				var checkout= "Check out Date: "+jQuery("#fecha-salida").val();
				var room= "Rooms: "+jQuery('#rooms option:selected').text();	

				var mensaje = 'send?phone=' + telefono2 + '&text=*_Formulario RESERVAR_*%0A' + checkin+ '%0A' + checkout+ '%0A' + room + '%0A' + '';
					if(isMobile()) {
						window.open(urlMobile + mensaje, '_blank');
					}else{
						window.open(urlDesktop + mensaje, '_blank');
					}
					console.log(urlDesktop + mensaje);

                  return false;
                });
 }
 /******fin reservar cita**********/
 
 /********formulario consultas*****/
    $('#webform-client-form-1').submit(function (event) {
        		event.preventDefault();
        		var post_data = $('#webform-client-form-1').serialize();
        		var filesend = "enviar.php"
        		$.post(filesend, post_data, function (data) {
        			$('#notification').show();
        			$('#webform-client-form-1').hide();
        			$("#page").addClass('noti');
        			//$('html,body').animate({	scrollTop: $("#contacto").offset().top}, 'slow');
        		});
        	});
    /**fin form consultas*****/
    
    
    var altoh=jQuery(".headsup").height();
    window.onscroll = function () 
    {
				myFunction();
				altoh=jQuery(".headsup").height();
			};
	var header1 = $("#zone-branding-wrapper");
	var sticky = $("#zone-branding-wrapper").height();

			function myFunction() 
			{
				if (window.pageYOffset > sticky) {
					header1.addClass("sticky0");
				} else {
					header1.removeClass("sticky0");
				} if (window.pageYOffset > (sticky + 70)) {
					header1.addClass("sticky");
				} else {
					header1.removeClass("sticky");
				}
				AOS.refresh();
			}
			
			
        $("#block-nice-menus-2 ul.nice-menu").aceResponsiveMenu({
    		 resizeWidth: '5000', 
    		 animationSpeed: 'medium', 
    		 accoridonExpAll: false
    	}); 
    	
    	
      $(window).load(function () {
          AOS.refresh();
    	 if(window.location.hash.replace('#', '')!==""){$('html,body').animate({scrollTop: $("#"+window.location.hash.replace('#', '')).offset().top-200},'slow');}
	    
		$(".ancla").click(function(e) { 
		    e.preventDefault(); 
		    var dest = $(this).attr('href'); 
		    $('html,body').animate({ scrollTop: $(dest).offset().top-200 }, 'slow'); 
		});
		
	});

	$(window).resize(function () {
	   AOS.refresh();
	});
	function smoothScrollingTo(target){
      $('html,body').animate({scrollTop:$(target).offset().top-altoh}, 1000);
    }
	function checkcontainer2(){
    if(document.readyState == "complete"){
        //smoothScrollingTo(location.href.substring(location.href.indexOf('#')));
        AOS.refresh();
    }
    else{
        setTimeout(function(){ checkcontainer2(); }, 50);
    }
}

});