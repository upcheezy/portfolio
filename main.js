function burgerClick() {
  $('.nav-bar').on('click', function(event) {
    // alert('hamburger click')
    // $('.fa-bars').hide()
    $('.nav-menu').toggleClass('nav-menu-popout');
  });
}

$(burgerClick())