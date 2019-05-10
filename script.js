$(function() {

    $('.show_result').click(() => {
        $('#load_parent').fadeIn(200).css('display','table');
        $('#load_parent').delay(2000).fadeOut(200).css('display','table');
        setTimeout(function() {
            window.location.href = "view.html";
          }, 2000);
    })

})