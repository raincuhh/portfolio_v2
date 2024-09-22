import { loc } from "./localization.js";
import { get_id, get_query, create_el, set_el_text_content, set_page_title } from "./helper.js";

// nav
/*
let nav_visiblity: boolean = false;

let nav_title: Element | null = get_query("#nav .nav_wrapper .nav_title");
if (nav_title) {
   nav_title.addEventListener("click", () => {
      toggle_nav();
      console.log("clicked toggle_nav");
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
*/
