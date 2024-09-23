import { get_id, get_query } from "./../../helper.js";

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

   const nav_menu_categories: Record<string, Element | null> = {
      contact: nav_menu_list?.querySelector("#nav_menu_item_contact"),
      theme: nav_menu_list?.querySelector("#nav_menu_item_theme"),
      lang: nav_menu_list?.querySelector("#nav_menu_item_lang"),
   };

   const nav_menu_category_body: Record<string, Element | null> = {
      contact: nav_menu_categories.contact?.querySelector(".nav_menu_item_cont"),
      theme: nav_menu_categories.theme?.querySelector(".nav_menu_item_cont"),
      lang: nav_menu_categories.lang?.querySelector(".nav_menu_item_cont"),
   };

   set_display(nav_menu_categories, "none");
   nav_menu_categories[_nav_menu_state]?.setAttribute("style", "display: block");
}

function set_display(elements: Record<string, Element | null>, display_style: string): void {
   Object.values(elements).forEach((el) => el?.setAttribute("style", `display: ${display_style}`));
}

function toggle_nav_menu_list_options(visible: boolean): void {
   const nav_menu_list: Element | null = get_query("#nav .nav_wrapper .nav_menu .nav_menu_list");
   if (!nav_menu_list) return;

   const nav_menu_categories: Record<string, Element | null> = {
      contact: nav_menu_list?.querySelector("#nav_menu_item_contact"),
      theme: nav_menu_list?.querySelector("#nav_menu_item_theme"),
      lang: nav_menu_list?.querySelector("#nav_menu_item_lang"),
   };

   const nav_menu_category_header: Record<string, Element | null> = {
      contact: nav_menu_categories.contact?.querySelector("#nav_menu_header_contact"),
      theme: nav_menu_categories.theme?.querySelector("#nav_menu_header_theme"),
      lang: nav_menu_categories.lang?.querySelector("#nav_menu_header_lang"),
   };

   const nav_menu_category_body: Record<string, Element | null> = {
      contact: nav_menu_categories.contact?.querySelector(".nav_menu_item_cont"),
      theme: nav_menu_categories.theme?.querySelector(".nav_menu_item_cont"),
      lang: nav_menu_categories.lang?.querySelector(".nav_menu_item_cont"),
   };

   if (visible) {
      set_display(nav_menu_categories, "block");
      set_display(nav_menu_category_header, "block");
      set_display(nav_menu_category_body, "none");
   } else {
      set_display(nav_menu_categories, "block");
      set_display(nav_menu_category_header, "none");
      set_display(nav_menu_category_body, "none");
   }
}

function add_nav_menu_header_listeners() {
   let nav_menu_item_headers: NodeListOf<Element> | null = document.querySelectorAll(
      "#nav .nav_wrapper .nav_menu .nav_menu_list .nav_menu_item .nav_menu_item_header"
   );
   if (nav_menu_item_headers) {
      const cats: Array<string> = [
         "nav_menu_header_contact",
         "nav_menu_header_theme",
         "nav_menu_header_lang",
      ];

      nav_menu_item_headers.forEach((el: Element) => {
         el.addEventListener("onclick", () => {
            let el_id: string | null = el.getAttribute("id");

            if (cats.includes(el_id)) {
               toggle_nav_menu_list_options(true);
            }
         });
      });
   }
}

export {
   nav_menu_state,
   current_nav_menu_state,
   show_single_nav_menu_category,
   set_display,
   toggle_nav_menu_list_options,
   add_nav_menu_header_listeners,
};
