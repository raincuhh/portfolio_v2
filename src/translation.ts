import { loc } from "./localization.js";
import { get_id, get_query, create_el, set_el_text_content, set_page_title } from "./helper.js";
import { stringify } from "querystring";

function add_translation() {
   // preload
   let preload_name: Element | null = get_query("#in_cont_preload .preload_title .preload_name strong");
   if (preload_name) loc(preload_name.textContent);

   let preload_article: Element | null = get_query("#in_cont_preload .preload_article p");
   if (preload_article) loc(preload_article.textContent);

   let preload_copyright: Element | null = get_query("#in_cont_preload .preload_copyright p");
   loc(preload_copyright.textContent);

   let preload_wip: Element | null = get_query("#in_cont_preload .preload_wip p");
   loc(preload_wip.textContent);

   // nav
   let nav_title: Element | null = get_query("#nav .nav_wrapper .nav_title");
   loc(nav_title.textContent);

   let nav_list: Element | null = get_query("#nav .nav_wrapper .nav_list");
   if (nav_list) {
      const children: HTMLCollection | null = nav_list.children;
      if (!children) return;

      for (let i = 0; i < children.length; i++) {
         const el: Element | null = children[i];
         let item: HTMLAnchorElement | null = el.querySelector("a");
         if (!item) return;
         loc(item.textContent);
         //console.log("item found");
      }
   }

   // scroll nav
   let scroll_nav_header: Element | null = get_query(
      "#scroll_nav .scroll_nav_wrapper .scroll_nav_list ._scroll_nav_header"
   );
   if (scroll_nav_header) loc(scroll_nav_header.textContent);

   let scroll_nav_list: Element | null = get_query("#scroll_nav .scroll_nav_wrapper .scroll_nav_list");
   if (scroll_nav_list) {
      const children: HTMLCollection | null = scroll_nav_list.children;
      if (!children) return;

      for (let i = 0; i < children.length; i++) {
         const el: Element | null = children[i];
         let item: HTMLAnchorElement | null = el.querySelector("scroll_nav_list_item");
         if (!item) return;
      }
   }
   // intro

   // about

   // projects

   // contact
}

add_translation();
