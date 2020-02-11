function burgerClick() {
  $('.nav-bar').on('click', '.fa-bars', function(event) {
    // alert('hamburger click')
    // $('.fa-bars').hide()
    $(this).parent().append(`
          <div class='nav-menu-popout'>
            <ul>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#project-container">Projects</a></li>
            </ul>
        </div>`
    )
    console.log($(this).parent().attr('class'))
  });
}

$(burgerClick())