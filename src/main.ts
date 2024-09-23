import { loc, change_lang, Languages } from "./localization.js";
import { get_id, get_query, create_el, set_el_text_content, set_page_title } from "./helper.js";

// nav
enum nav_menu_state {
   contact = "contact",
   theme = "theme",
   lang = "lang",
}

let current_nav_menu_state: nav_menu_state = nav_menu_state.contact;
function show_single_nav_menu_category(_nav_menu_state: nav_menu_state): void {
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
}

function toggle_nav_menu_list_options(visible: boolean) {
   const nav_menu_list: Element | null = get_query("#nav .nav_wrapper .nav_menu .nav_menu_list");
   if (!nav_menu_list) return;

   const nav_menu_categories = {
      contact: nav_menu_list.querySelector("#nav_menu_item_contact"),
      theme: nav_menu_list.querySelector("#nav_menu_item_theme"),
      lang: nav_menu_list.querySelector("#nav_menu_item_lang"),
   };
   if (!nav_menu_categories) return;

   const nav_menu_category_header = {
      contact_header: nav_menu_categories.contact.querySelector("#nav_menu_header_contact"),
      theme_header: nav_menu_categories.theme.querySelector("#nav_menu_header_theme"),
      lang_header: nav_menu_categories.theme.querySelector("#nav_menu_header_lang"),
   };
   if (!nav_menu_category_header) return;

   const nav_menu_category_body = {
      contact_body: nav_menu_categories.contact.querySelector(".nav_menu_item_cont"),
      theme_body: nav_menu_categories.theme.querySelector(".nav_menu_item_cont"),
      lang_body: nav_menu_categories.theme.querySelector(".nav_menu_item_cont"),
   };
   if (!nav_menu_category_body) return;

   switch (visible) {
      case true:
         Object.values(nav_menu_categories).forEach((el) => el?.setAttribute("style", "display: block"));
         Object.values(nav_menu_category_header).forEach((el: Element) => {
            el?.setAttribute("style", "display: block");
         });
         Object.values(nav_menu_category_body).forEach((el: Element) => {
            el?.setAttribute("style", "display: none");
         });
         break;
      case false:
         Object.values(nav_menu_categories).forEach((el) => el?.setAttribute("style", "display: block"));
         Object.values(nav_menu_category_header).forEach((el: Element) => {
            el?.setAttribute("style", "display: none");
         });
         Object.values(nav_menu_category_body).forEach((el: Element) => {
            el?.setAttribute("style", "display: none");
         });
         break;
   }
}

let nav_menu_item_headers: NodeListOf<Element> | null = document.querySelectorAll(
   "#nav .nav_wrapper .nav_menu .nav_menu_list .nav_menu_item .nav_menu_item_header"
);
if (nav_menu_item_headers) {
   const cats: Array<string> = ["nav_menu_header_contact", "nav_menu_header_theme", "nav_menu_header_lang"];

   nav_menu_item_headers.forEach((el: Element) => {
      el.addEventListener("onclick", () => {
         let el_id: string | null = el.getAttribute("id");

         if (cats.includes(el_id)) {
            toggle_nav_menu_list_options(true);
         }
      });
   });
}

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
}

export { main };
