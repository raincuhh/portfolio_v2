// main is main, handles setting up the page after dom content has loaded
import { change_lang, Languages } from "./localization.js";
import { current_nav_menu_state, show_single_nav_menu_category, } from "./navbar.js";
import { create_cursor_instance, set_cursor_hoverable_listeners } from "./cursor.js";
import { add_smooth_scroll } from "./page_scroll.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
function conclude_loader() {
    const loader = document.querySelector("#loader");
    loader.setAttribute("hidden", "");
    //lock_scrolling(false);
    add_smooth_scroll();
    console.log("finished loading");
}
function simulate_page_loading() {
    const progress_bar = document.querySelector(".loader_progress_bar");
    const loader_progress_bar_content = document.querySelector(".loader_progress_bar_progress");
    const loader_progress_bar_text = document.querySelector(".loader_progress_bar_text");
    lock_scrolling(false);
    if (!loader_progress_bar_content || !progress_bar || !loader_progress_bar_text) {
        //lock_scrolling(false);
        console.error("ERROR: no loader bar elements found.");
        return;
    }
    let height = 0;
    const loading_interval = setInterval(() => {
        if (height >= 100) {
            clearInterval(loading_interval);
            loader_progress_bar_content.setAttribute("style", "height: 100%");
            loader_progress_bar_text.textContent = "100";
            // after simulation is finished, conclude loading
            setTimeout(() => {
                conclude_loader();
            }, 200);
        }
        else {
            let random_num = Math.floor(Math.random() * 3);
            height += random_num + 1;
            loader_progress_bar_content.setAttribute("style", `height: ${height}%`);
            loader_progress_bar_text.textContent = height.toString();
        }
    }, 17.5);
}
function set_default_nav_menu_visiblity() {
    show_single_nav_menu_category(current_nav_menu_state);
}
function set_default_language() {
    change_lang(Languages.English);
}
function set_copyright_year() {
    let date = new Date();
    let year = date.getFullYear();
    let copyright_year_divs = document.querySelectorAll("#copyright_year");
    if (copyright_year_divs) {
        copyright_year_divs.forEach((e) => {
            e.textContent = year.toString();
        });
    }
}
function lock_scrolling(val = true) {
    let locked;
    switch (val) {
        case true:
            locked = "hidden";
            break;
        case false:
            locked = "unset";
            break;
    }
    let body = document.querySelector("body");
    if (body) {
        body.setAttribute("style", `overflow: ${locked}`);
    }
    else {
        console.error("body element not found");
    }
}
function main() {
    simulate_page_loading();
    set_default_nav_menu_visiblity();
    set_default_language();
    set_copyright_year();
    let cursor = create_cursor_instance();
    if (cursor)
        set_cursor_hoverable_listeners(cursor);
    console.log("finished setting up page");
}
export { main };
//# sourceMappingURL=main.js.map