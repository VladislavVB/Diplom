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

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.794496, 37.702655], // координаты центра на карте
    zoom: 15, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapp-marker.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});