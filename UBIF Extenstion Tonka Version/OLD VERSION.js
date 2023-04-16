document.addEventListener('DOMContentLoaded', function() {
    var NeedMoreInfo = document.getElementById('Need more Info');
    NeedMoreInfo.addEventListener('click', function() {
        var text = "Need more info lead response";
        navigator.clipboard.writeText(text).then(function() {
            console.log('Text copied to clipboard');
        }, function() {
            console.log('Error copying text to clipboard');
        });
    });
    var Iphone = document.getElementById('iphone asurion');
    Iphone.addEventListener('click', function() {
        var text = "iphone asurion lead";
        navigator.clipboard.writeText(text).then(function() {
            console.log('Text copied to clipboard');
        }, function() {
            console.log('Error copying text to clipboard');
        });
    });
});
