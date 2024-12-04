$(document).ready(function () {
    //
    function sidebar_toggle(){
        $('.header__menu-trigger').toggleClass('active');
        $('aside').toggleClass('active');
        $('#mask').toggleClass('active');
        return false;
    }

    // ハンバーガーメニュー
    $('.header__menu-trigger, #mask').on('click', function () {
        // $('.header__menu-trigger').toggleClass('active');
        // $('aside').toggleClass('active');
        // $('#mask').toggleClass('active');
        // return false;
        sidebar_toggle();
    });
    

    // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
    $('a[href^="#"]').click(function(){
        sidebar_toggle();

        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = -100;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    // カルーセル
    $(".slider-items").slick({
        autoplay: true,         // 自動再生
        autoplaySpeed: 3000,    // 自動再生の速度をミリ秒で指定
        dots: false,             // 表示画像を示すドット
        arrows: false,           // 画像を切り替える矢印
        slidesToShow: 3,        // 1度に表示する画像数
        slidesToScroll: 1,      // 1度にスライドする画像数
        infinite: true,         // 画像のループ
        centerMode: true,       // 前/次のスライドの一部が見える状態にする
        centerPadding: '10%',   // 前/次のスライドはどのぐらい見えるか
        responsive: [           // レスポンシブ対応
            {
                breakpoint: 768,        //max-width(px)で指定
                settings: {
                    slidesToShow: 1,    // 任意の設定値
                }
            },
        ]
    });

    // カードの画像：フェード
    $(window).on('load scroll', function (){
        var box = $('.card__img');
        var animated = 'animated';
            
        box.each(function(){
            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();
            
            if(scrollPos > boxOffset - wh + 100 ){
                $(this).addClass(animated);
            }
        });
    });

    
});