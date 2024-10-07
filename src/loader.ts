import { add_smooth_scroll } from "./page_scroll.js";
import { gsap } from "gsap";

function page_intro_cat() {
   let main = gsap.timeline();
   let intro_title = gsap.utils.selector(document.querySelector(".intro_title"));

   //intro_title(".intro_title_text_line").forEach();https://gsap.com/community/forums/topic/28787-stagger-timelines/
}

function conclude_loader() {
   const loader: Element | null = document.querySelector("#loader");
   loader.setAttribute("hidden", "");

   //lock_scrolling(false);
   add_smooth_scroll();
}

function simulate_page_loading() {
   const progress_bar: Element | null = document.querySelector(".loader_progress_bar");
   const loader_progress_bar_content: Element | null = document.querySelector(
      ".loader_progress_bar_progress"
   );
   const loader_progress_bar_text: Element | null = document.querySelector(".loader_progress_bar_text");

   if (!loader_progress_bar_content || !progress_bar || !loader_progress_bar_text) {
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
      } else {
         let random_num: number = Math.floor(Math.random() * 3);
         height += random_num + 1;
         loader_progress_bar_content.setAttribute("style", `height: ${height}%`);
         loader_progress_bar_text.textContent = height.toString();
      }
   }, 17.5);
}

export { simulate_page_loading };
