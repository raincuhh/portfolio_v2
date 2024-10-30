import { add_smooth_scroll } from "./page_scroll.js";
import { init_projects } from "./project.js";
import { gsap } from "gsap";

function apply_blur(e: Element, val: number) {
   gsap.to(e, {
      filter: `blur(${val}rem)`,
   });
}

function page_intro_cat() {
   let main_tl: GSAPTimeline = gsap.timeline();
   let intro_title = gsap.utils.selector(document.querySelector(".intro_title"));

   intro_title(".intro_title_text_line").forEach((e, i) => {
      let blur_val: { a: number } = { a: 1 };
      gsap.to(blur_val, {
         a: 0,
         duration: 2,
         onUpdate: () => {
            apply_blur(e, blur_val.a);
         },
      });

      const el_tl: GSAPTimeline = gsap.timeline();
      el_tl.to(
         e,
         {
            x: "0%",
            opacity: 1,
            filter: "blur(0rem)",
            duration: 2,
            ease: "power1.inOut",
         },
         "-=1.5" // 0.0
      );
      el_tl.to(
         e,
         {
            y: "0%",
            duration: 1.8,
            ease: "power1.inOut",
         },
         "-=1.2" // 0.9
      );
      main_tl.add(el_tl, i * 0.06);
   });
}

function conclude_loader() {
   const loader: Element | null = document.querySelector("#loader");
   loader.setAttribute("hidden", "");
   page_intro_cat();
   init_projects();
   //add_smooth_scroll();

   function trigger_resize_event() {
      window.dispatchEvent(new Event("resize"));
   }

   function trigger_reflow() {
      document.body.style.height = document.body.scrollHeight + 1 + "px";
      console.log("dwada");

      setTimeout(() => {
         document.body.style.height = "";
      }, 50);
   }

   trigger_reflow();
   trigger_resize_event();
}

function init() {
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
         }, 250);
      } else {
         let random_num: number = Math.floor(Math.random() * 3);
         height += random_num + 1;
         loader_progress_bar_content.setAttribute("style", `height: ${height}%`);
         loader_progress_bar_text.textContent = height.toString();
      }
   }, 17.5);
}

export { init };
