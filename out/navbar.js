import { get_query } from "./helper.js";
// nav
var nav_menu_state;
(function (nav_menu_state) {
    nav_menu_state["contact"] = "contact";
    nav_menu_state["theme"] = "theme";
    nav_menu_state["lang"] = "lang";
})(nav_menu_state || (nav_menu_state = {}));
let current_nav_menu_state = nav_menu_state.contact;
function show_single_nav_menu_category(_nav_menu_state) {
    const nav_menu_list = get_query("#nav .nav_wrapper .nav_menu .nav_menu_list");
    if (!nav_menu_list)
        return;
    const nav_menu_categories = {
        contact: nav_menu_list?.querySelector("#nav_menu_item_contact"),
        theme: nav_menu_list?.querySelector("#nav_menu_item_theme"),
        lang: nav_menu_list?.querySelector("#nav_menu_item_lang"),
    };
    const nav_menu_category_body = {
        contact: nav_menu_categories.contact?.querySelector(".nav_menu_item_cont"),
        theme: nav_menu_categories.theme?.querySelector(".nav_menu_item_cont"),
        lang: nav_menu_categories.lang?.querySelector(".nav_menu_item_cont"),
    };
    set_display(nav_menu_categories, "none");
    nav_menu_categories[_nav_menu_state]?.setAttribute("style", "display: block");
}
function set_display(elements, display_style) {
    Object.values(elements).forEach((el) => el?.setAttribute("style", `display: ${display_style}`));
}
function toggle_nav_menu_list_options(visible) {
    const nav_menu_list = get_query("#nav .nav_wrapper .nav_menu .nav_menu_list");
    if (!nav_menu_list)
        return;
    const nav_menu_categories = {
        contact: nav_menu_list?.querySelector("#nav_menu_item_contact"),
        theme: nav_menu_list?.querySelector("#nav_menu_item_theme"),
        lang: nav_menu_list?.querySelector("#nav_menu_item_lang"),
    };
    const nav_menu_category_header = {
        contact: nav_menu_categories.contact?.querySelector("#nav_menu_header_contact"),
        theme: nav_menu_categories.theme?.querySelector("#nav_menu_header_theme"),
        lang: nav_menu_categories.lang?.querySelector("#nav_menu_header_lang"),
    };
    const nav_menu_category_body = {
        contact: nav_menu_categories.contact?.querySelector(".nav_menu_item_cont"),
        theme: nav_menu_categories.theme?.querySelector(".nav_menu_item_cont"),
        lang: nav_menu_categories.lang?.querySelector(".nav_menu_item_cont"),
    };
    if (visible) {
        set_display(nav_menu_categories, "block");
        set_display(nav_menu_category_header, "block");
        set_display(nav_menu_category_body, "none");
    }
    else {
        set_display(nav_menu_categories, "block");
        set_display(nav_menu_category_header, "none");
        set_display(nav_menu_category_body, "none");
    }
}
function add_nav_menu_header_listeners() {
    let nav_menu_item_headers = document.querySelectorAll("#nav .nav_wrapper .nav_menu .nav_menu_list .nav_menu_item .nav_menu_item_header");
    if (nav_menu_item_headers) {
        const cats = [
            "nav_menu_header_contact",
            "nav_menu_header_theme",
            "nav_menu_header_lang",
        ];
        nav_menu_item_headers.forEach((el) => {
            el.addEventListener("onclick", () => {
                let el_id = el.getAttribute("id");
                if (cats.includes(el_id)) {
                    toggle_nav_menu_list_options(true);
                }
            });
        });
    }
}
export { nav_menu_state, current_nav_menu_state, show_single_nav_menu_category, set_display, toggle_nav_menu_list_options, add_nav_menu_header_listeners, };
//# sourceMappingURL=navbar.js.map