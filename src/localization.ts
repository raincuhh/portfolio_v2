import { get_id, query, create, set_el_text_content, set_page_title } from "./helper.js";

enum Languages {
   English = 0,
   Norwegian,
}

const translations: {
   [key: string]: {
      [key in Languages]: string;
   };
} = {
   "contact me at": {
      [Languages.English]: "contact me at",
      [Languages.Norwegian]: "kontakt meg hos",
   },
   "change the theme": {
      [Languages.English]: "change the theme",
      [Languages.Norwegian]: "bytt tema",
   },
   black: {
      [Languages.English]: "black",
      [Languages.Norwegian]: "svart",
   },
   white: {
      [Languages.English]: "white",
      [Languages.Norwegian]: "hvit",
   },
   "switch language": {
      [Languages.English]: "switch language",
      [Languages.Norwegian]: "bytt språk",
   },
};

function loc(str: string | null, lang: Languages): string {
   if (!str) return "";
   const translation = translations[str];
   if (translation) {
      return translation[lang] || str;
   }
   return str;
}

function change_lang(lang: Languages = Languages.English) {
   // misc

   // section tag
   let section_tag_List: NodeListOf<Element> | null = document.querySelectorAll(".section_tag");
   if (section_tag_List) {
      section_tag_List.forEach((el: Element) => {
         loc(el.textContent, lang);
      });
   }

   // preload
   let preload_name: Element | null = query("#in_cont_preload .preload_title .preload_name strong");
   if (preload_name) loc(preload_name.textContent, lang);

   let preload_article: Element | null = query("#in_cont_preload .preload_article p");
   if (preload_article) loc(preload_article.textContent, lang);

   let preload_copyright: Element | null = query("#in_cont_preload .preload_copyright p");
   if (preload_copyright) loc(preload_copyright.textContent, lang);

   let preload_wip: Element | null = query("#in_cont_preload .preload_wip p");
   if (preload_wip) loc(preload_wip.textContent, lang);

   // nav
   let nav_header_name_first: Element | null = query("#nav .nav_wrapper .nav_header .nav_header_name_first");
   if (nav_header_name_first) loc(nav_header_name_first.textContent, lang);

   let nav_header_name_last: Element | null = query(
      "#nav .nav_wrapper .nav_header .nav_header_info .nav_header_name_last"
   );
   if (nav_header_name_last) loc(nav_header_name_last.textContent, lang);

   let nav_menu_list: Element | null = query("#nav .nav_wrapper .nav_menu_list");
   if (nav_menu_list) {
      const items: HTMLCollection | null = nav_menu_list.children;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
         const item: Element | null = items[i];
         let item_header: Element | null = item.querySelector(".nav_menu_item_header");
         if (!item_header) continue;
         loc(item_header.textContent, lang);
         console.log(item_header.textContent);
      }
   }

   // scroll nav
   /*
   let scroll_nav_header: Element | null = query(
      "#scroll_nav .scroll_nav_wrapper .scroll_nav_list ._scroll_nav_header"
   );
   if (scroll_nav_header) loc(scroll_nav_header.textContent, lang);

   let scroll_nav_list: Element | null = query("#scroll_nav .scroll_nav_wrapper .scroll_nav_list");
   if (scroll_nav_list) {
      const children: HTMLCollection | null = scroll_nav_list.children;
      if (!children) return;

      for (let i = 0; i < children.length; i++) {
         const el: Element | null = children[i];
         let item: HTMLAnchorElement | null = el.querySelector("scroll_nav_list_item");
         if (!item) continue;
         loc(item.textContent, lang);
      }
   }
   */

   // intro
   let intro_title_text_line_list = query("#in_cont_intro");
   if (intro_title_text_line_list) {
      const children: HTMLCollection | null = intro_title_text_line_list.children;
      if (!children) return;

      for (let i = 0; i < children.length; i++) {
         const el: Element | null = children[i];
         let strong_el = el.querySelector("strong");
         if (!el || strong_el) return;

         if (el && strong_el) {
            loc(strong_el.textContent, lang);
         } else {
            loc(el.textContent, lang);
         }
      }
   }

   // about

   // projects

   // contact
}

function set_default_language(): void {
   change_lang(Languages.English);
}

export { loc, Languages, change_lang, set_default_language };
