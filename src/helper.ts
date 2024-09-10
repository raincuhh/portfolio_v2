function get_id(id: string) {
   return document.getElementById(id);
}

function get_query(what: string) {
   return document.querySelector(what);
}

function create_el(el: string) {
   return document.createElement(el);
}

function set_el_text_content(el: HTMLElement, str: string) {
   el.textContent = str;
}

function set_page_title(str: string) {
   document.title = str;
}

function uppercaseifyString(str: string) {
   let parts = str.split(" ");
   parts.forEach((part, index) => {
      parts[index] = uppercaseify(part);
   });

   return parts.join(" ");
}

function uppercaseify(str: string) {
   let firstChar = str.charAt(0);
   if (firstChar !== firstChar.toUpperCase()) {
      str = str.charAt(0).toUpperCase() + str.slice(1);
   }
   return str;
}

function loc(str: string) {
   // localization stuff here
   return str;
}
