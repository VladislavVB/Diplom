if(!window.jQuery){
document.write('<script type="text/javascript" src="/js/lib/jquery.js"></script>')
}

$(document).ready(function () {

  new WOW().init();

  var modal = $('.modal');
  var modalUp = $('.modal-up');
  var modalForm = $('.modal__form');
  var heroForm = $('.hero__form');
  var offerForm = $('.offer__form');
  
  onSubmitForm(modalForm)
  onSubmitForm(heroForm)
  onSubmitForm(offerForm)

  $('[data-toggle=modal]').on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $('.modal__close').on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $('.modal-up__close').on('click', function () {
    modalUp.removeClass('modal-up--visible');
  });

  $(document).keydown(function () {
    if (event.keyCode == 27) {
      modal.removeClass('modal--visible');
      modalUp.removeClass('modal-up--visible');
    }
  });

   heroForm.validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },

      userEmail: {
        required: true,
        email: true
      },
  }, 
  messages: {
    userName: {
      required: "Имя обязательно для заполнения",
      minlength: "Имя не короче 2-х букв"
    },
    userPhone: "Телефон обязателен для заполнения",

    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com"
      },
    }
  });
  
  function onSubmitForm(form) { 
   form.submit(function (event) {
     if (form.valid()) {
       event.preventDefault();
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(this).serialize(),
          success: function (response) {
           form[0].reset();
           $('.modal').removeClass('modal--visible'); 
           $('.modal-up').addClass('modal-up--visible');
            console.log(response)
        },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(jqXHR + " " + textStatus);
            
       }
       });
  }});
  }

  modalForm.validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {

      userName: {
        required: true,
        minlength: 2
      },

      userPhone: {
        required: true,
        minlength: 17
      },
 
      userEmail: {
        required: true,
        email: true
      },
    }, 

    messages: {
      userName: {
        required: "Имя обязательно для заполнения",
        minlength: "Имя не короче 2-х букв"
      },
      userPhone: "Телефон обязателен для заполнения",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      },
    }
  });

   offerForm.validate({
    errorClass: "invalid",
     errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      },
  }, 
  messages: {
   userName: {
      required: "Имя обязательно для заполнения",
      minlength: "Имя не короче 2-х букв"
    },
    userPhone: "Телефон обязателен для заполнения",
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com"
      },
    }
  });
  
  $('[type=tel]').mask('+7(000) 000-00-00');
   

    //слайд
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    //слайд2

    //видео
    var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'lyGqyFxBHfM',
    events: {
      'onReady': videoPlay,
    }
    });
  })
  function videoPlay(event) {
    event.target.setVolume(50);
    event.target.playVideo();

  }

  //видео в слайдере
  $('.video__play1').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
      height: '100%',
      width: '100%',
      videoId: 'IWUExTE-uyk',
      events: {
        'onReady': videoPlay,
      }
      });
    })
    function videoPlay(event) {
      event.target.setVolume(50);
      event.target.playVideo();
  
    }

    $('.video__play2').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player2', {
        height: '100%',
        width: '100%',
        videoId: 'ane23G3HSIU',
        events: {
        'onReady': videoPlay,
        }
        });
    })
    function videoPlay(event) {
        event.target.setVolume(50);
        event.target.playVideo();
    
    }

    $('.video__play3').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player3', {
            height: '100%',
            width: '100%',
            videoId: 'cJNXUjGh9Vg',
            events: {
            'onReady': videoPlay,
            }
            });
        })
        function videoPlay(event) {
            event.target.setVolume(50);
            event.target.playVideo();
        
        }

    $('.video__play4').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player4', {
            height: '100%',
            width: '100%',
            videoId: 'Ky8SjtyCuTg',
            events: {
            'onReady': videoPlay,
            }
            });
        })
        function videoPlay(event) {
            event.target.setVolume(50);
            event.target.playVideo();
        
        }

    $('.video__play5').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player5', {
            height: '100%',
            width: '100%',
            videoId: 'Vm87YnF7C9o',
            events: {
            'onReady': videoPlay,
            }
            });
        })
        function videoPlay(event) {
            event.target.setVolume(50);
            event.target.playVideo();
        
        }
    
        var modal = $('.modal');
        var modalUp = $('.modal-up');
        
        var modalForm = $('.modal__form');
        var controlForm = $('.control__form');
        var footerForm = $('.footer__form');
        
        onSubmitForm(modalForm)
        onSubmitForm(controlForm)
        onSubmitForm(footerForm)
      
        $('[data-toggle=modal]').on('click', function () {
          modal.toggleClass('modal--visible');
        });
      
        $('.modal__close').on('click', function () {
          modal.toggleClass('modal--visible');
        });
      
        $('.modal-up__close').on('click', function () {
          modalUp.removeClass('modal-up--visible');
        });
      
        $(document).keydown(function () {
          if (event.keyCode == 27) {
            modal.removeClass('modal--visible');
            modalUp.removeClass('modal-up--visible');
          }
        });

  

});