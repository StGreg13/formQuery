var link = $('.modal-link'),
    popup = $('.popup'),
    overlay = $('.popup-overlay'),
    close = $('.popup-close');


link.click(function(){
    overlay.show();
    popup.show();
});
close.click(function(){
    overlay.hide();
    popup.hide();
});
overlay.click(function(){
    overlay.hide();
    popup.hide();
});