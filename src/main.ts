import { loc, Languages } from "./localization.js";
import { change_lang } from "./translation.js";
import { get_id, get_query, create_el, set_el_text_content, set_page_title } from "./helper.js";

// nav
let nav_visiblity: boolean = false;
let nav_title: Element | null = get_query("#nav .nav_wrapper .nav_title");

if (nav_title) {
   nav_title.addEventListener("click", () => {
      toggle_nav();
   });
}

function toggle_nav() {
   let nav_list: Element = get_query("#nav .nav_wrapper .nav_list");

   if (window.innerWidth >= 1024) {
      nav_list.setAttribute("style", "display: none");
      nav_visiblity = false;
      return;
   }

   if (!nav_visiblity) {
      nav_visiblity = true;
      nav_list.setAttribute("style", "display: block");
   } else {
      nav_visiblity = false;
      nav_list.setAttribute("style", "display: none");
   }
}

document.addEventListener("resize", () => {
   check_resize_on_nav_list();
});

function check_resize_on_nav_list() {
   if (window.innerWidth >= 1024 && nav_visiblity) {
      let nav_list: Element = get_query("#nav .nav_wrapper .nav_list");

      nav_visiblity = false;
      nav_list.setAttribute("style", "display: none");
   }
}

enum nav_menu_state {
   contact = "contact",
   theme = "theme",
   lang = "lang",
}

let current_nav_menu_state: nav_menu_state = nav_menu_state.contact;

function update_nav_menu_visiblity(_nav_menu_state: nav_menu_state) {
   const nav_menu_list: Element | null = get_query("#nav .nav_wrapper .nav_menu .nav_menu_list");

   if (!nav_menu_list) return;

   const nav_menu_categories = {
      contact: nav_menu_list.querySelector("#nav_menu_item_contact"),
      theme: nav_menu_list.querySelector("#nav_menu_item_theme"),
      lang: nav_menu_list.querySelector("#nav_menu_item_lang"),
   };

   Object.values(nav_menu_categories).forEach((cat) => cat?.setAttribute("style", "display: none"));

   const selected_cat: Element | null = nav_menu_categories[_nav_menu_state];
   selected_cat?.setAttribute("style", "display: block");
   console.log(selected_cat);
}

function set_default_nav_menu_visiblity() {
   update_nav_menu_visiblity(current_nav_menu_state);
}

// language

function set_default_lang() {
   change_lang(Languages.English);
}

function set_copyright_year() {}

function main() {
   set_default_nav_menu_visiblity();
   set_default_lang();
}

export { main };
