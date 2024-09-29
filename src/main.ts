// main is main, handles setting up the page after dom content has loaded

import { set_default_language } from "./localization.js";
import { set_default_nav_menu_visiblity } from "./navbar.js";
import { create_cursor_instance, set_cursor_hoverable_listeners } from "./cursor.js";
import { simulate_page_loading } from "./loader.js";
import { set_copyright_year } from "./copyright.js";

function main(): void {
   simulate_page_loading();

   set_default_nav_menu_visiblity();
   set_default_language();
   set_copyright_year();

   let cursor: Element | null = create_cursor_instance();
   if (cursor) set_cursor_hoverable_listeners(cursor);
   console.log("finished setting up page");
}

export { main };
