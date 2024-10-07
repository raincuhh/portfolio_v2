enum Page_theme {
   black = 0,
   white,
}

function set_page_theme(page_theme: Page_theme) {
   switch (page_theme) {
      case Page_theme.black:
         break;

      case Page_theme.white:
         break;
   }
}

export { set_page_theme };
