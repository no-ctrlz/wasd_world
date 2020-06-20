//workpage에서 하단 스크롤이 안되는 오류가 있음

window.onload = function () {
    var elm = ".scrollMain";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
//                if (window.opera) delta = -delta;
            } else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) {}
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 250,
                complete: function () {}
            });
        });
    });
}

//같은 효과 다른 코드
//   setGrid('.scrollMain');
//
//
//
//      function setGrid(target) {
//
//        var $win = $(window),
//
//          $target = $(target);
//
//
//        var scrollMotion = function () {
//
//          var scrollTop = $win.scrollTop(),
//
//            winH = $win.height();
//
//
//          $target.each(function (i) {
//
//            var $this = $(this),
//
//              position = this.getBoundingClientRect().top;  // 요소의 크기와 요소의 viewport에서의 상대적인 위치를 반환
//
//            if (position < winH) {
//
//              $this.addClass('show');
//
//            } else {
//
//              $this.removeClass('show');
//
//            }
//
//          });
//
//        };
//
//
//        scrollMotion();
//
//        $(window).on('scroll', scrollMotion);
//
//      }
//
//      var currentPage = 1;
//
//
//
//      // scroll mousewheel
//
//      var moveTop = null;
//
//      $("section").each(function () {
//
//        // 개별적으로 Wheel 이벤트 적용
//
//        $(this).on("mousewheel DOMMouseScroll", function (e) {
//
//          e.preventDefault();
//
//          var delta = 0;
//
//
//
//          if (!event) event = window.event;
//
//          if (event.wheelDelta) {
//
//            delta = event.wheelDelta / 120;
//
//            if (window.opera) delta = -delta;
//
//          } else if (event.detail) delta = -event.detail / 3;
//
//
//
//          // 마우스휠을 위에서 아래로
//
//          if (delta < 0) {
//
//            if ($(this).next() != undefined) {
//
//              moveTop = $(this).next().offset().top; //타겟의 다음 좌표의
//
//            }
//
//            // 마우스휠을 아래에서 위로
//
//          } else {
//
//            if ($(this).prev() != undefined) {
//
//              moveTop = $(this).prev().offset().top;
//
//            }
//
//          }
//
//          // 화면 이동 0.8초(800)
//
//          $("html,body").stop().animate({
//
//            scrollTop: moveTop + 'px'
//
//          }, {
//
//              duration: 800, complete: function () {
//
//                moveSection();
//
//              }
//
//            });
//
//        });
//
//      });