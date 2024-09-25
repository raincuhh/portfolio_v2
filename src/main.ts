import { loc, change_lang, Languages } from "./localization.js";
import { get_id, get_query, create_el, set_el_text_content, set_page_title } from "./helper.js";
import {
   nav_menu_state,
   current_nav_menu_state,
   show_single_nav_menu_category,
   set_display,
   toggle_nav_menu_list_options,
   add_nav_menu_header_listeners,
} from "./components/navbar/navbar.js";
import { create_cursor_instance, set_cursor_hoverable_listeners } from "./components/cursor.js";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

function set_default_nav_menu_visiblity() {
   show_single_nav_menu_category(current_nav_menu_state);
}

// language
function set_default_lang(): void {
   change_lang(Languages.English);
}

function set_copyright_year(): void {
   let date: Date = new Date();
   let year: number = date.getFullYear();
   let copyright_year_divs: NodeListOf<Element> | null = document.querySelectorAll("#copyright_year");

   if (copyright_year_divs) {
      copyright_year_divs.forEach((e: Element) => {
         e.textContent = year.toString();
      });
   }
}

function main(): void {
   set_default_nav_menu_visiblity();
   set_default_lang();
   set_copyright_year();
   let cursor: Element = create_cursor_instance();
   set_cursor_hoverable_listeners(cursor);
   //add_nav_menu_header_listeners();
   console.log("working, type shi");
}

export { main };
