$(document).ready(function(){

    // ハンバーガーメニュー
    $('.menu-trigger').on('click', function(){
        $('#menu01').toggleClass('active');
        $('.header__menu').toggleClass('active');
        
        return false;
    })

    // スクロールするたびに処理を呼び出す
    $(window).scroll(function(){

        // スクロール量を取得
        let scroll = $(window).scrollTop();
    
        // header表示/非表示
        let headerPosition = $('header').offset().top;
        if(scroll > 30){                   // スクロールが100px超えたらアクティブ
            $('header').addClass('active');
        }
        if(scroll < 30){  // スクロールが100未満なら非アクティブ
            $('header').removeClass('active')
        }
        


        // mainvisualをスクロールに応じて拡大
        $('#mainvisual').css({
            backgroundSize: (100 + scroll/6)  + "%",
        });

        // scroll__fadeinクラスを持つ全ての要素に適用
        // $('.scroll__show').each(function(){
        //     let targetElement = $(this).offset().top;   // 対象要素のページ上部からの距離を取得
        //     let scroll = $(window).scrollTop();         // 現在のスクロール位置を取得　※ページ上部からのスクロール距離
        //     let windowHeight = $(window).height();      // ウィンドウの高さを取得
        //     if(scroll > targetElement - windowHeight){
        //         // $(this).addClass('scrollin');
        //         $(this).addClass('active');
        //     }
        // });
    });

});