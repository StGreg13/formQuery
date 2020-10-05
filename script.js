var link = $('.modal-link'),
    popup = $('.popup'),
    overlay = $('.popup-overlay'),
    close = $('.popup-close');


link.click(function(){
    overlay.fadeIn();
    popup.toggleClass('popup-active');
});
close.click(function(){
    overlay.fadeOut();
    popup.toggleClass('popup-active');
});
overlay.click(function(){
    overlay.fadeOut();
    popup.toggleClass('popup-active');
});