const menuIcon = document.querySelector("#menu-icon"),
      menuIconHeader = document.querySelector("#menu-icon-header"),
      menuPanel = document.querySelector("#menu"),
      linksInMenu = Array.from(document.querySelectorAll(".menu__nav a"));

[menuIcon, menuIconHeader].forEach( function( element ) {

    element.addEventListener("click", e => {

        e.preventDefault();
    
        if ( !menuIcon.classList.contains("menu-icon--open") ) {
            menuIcon.classList.add("menu-icon--open")
            menuIconHeader.classList.add("menu-icon--open")
        } else {
            menuIcon.classList.remove("menu-icon--open")
            menuIconHeader.classList.remove("menu-icon--open")
        }
    
        if ( menuPanel.classList.contains("menu--hidden") ) {
            menuPanel.classList.remove("menu--hidden")
        } else {
            menuPanel.classList.add("menu--hidden")
        }
    
    });

});

linksInMenu.forEach( function( element ) {
    element.addEventListener("click", e => {
    
        menuIcon.classList.remove("menu-icon--open");
        menuIconHeader.classList.remove("menu-icon--open");
        menuPanel.classList.add("menu--hidden");
    
    });
});
