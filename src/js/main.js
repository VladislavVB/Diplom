if(!window.jQuery){
document.write('<script type="text/javascript" src="/js/lib/jquery.js"></script>')
}

$(document).ready(function () {

   

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

});