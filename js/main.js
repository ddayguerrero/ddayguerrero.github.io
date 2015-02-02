
function init(){

preloadImgs(["img/welcome/pic1.jpg", "img/welcome/pic2.jpg"]);

/* Sticky menu */
$(".navbar").sticky({topSpacing: 0});


/* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 775,
        filter: "",
        easing: "swing"	
     });

/* Vegas Backgrounds */
	
		$.vegas('slideshow', {
			  backgrounds:[		
				{ src:'img/welcome/pic1.jpg', fade: 3000 },
				{ src:'img/welcome/pic2.jpg', fade: 3000 }
			  ]
			})('overlay', {
			  src:'img/pattern2.png'
			});
			$( "#vegas-next" ).click(function() {
			  $.vegas('next');
			});
			$( "#vegas-prev" ).click(function() {
			  $.vegas('previous');
		});


/* Contact form */

      $('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('Valid!').addClass('valid')
                .closest('.form-group').removeClass('error').addClass('success');
        }
    });

    $('button[type="reset"]').click(function(){
        $('.validate').each(function(){
            $(this).parents('div.form-group').removeClass('success').removeClass('error');
        });
    }); 
}

function preloadImgs(imgs)
{
    var img = new Image();
    for (var i = 0; i < img.length; i++)
    {
        img.src = imgs[i];
    }
}


$(document).ready(init);