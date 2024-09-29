import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

function add_smooth_scroll() {
   let html: HTMLElement = document.documentElement;
   let body: HTMLElement = document.body;

   let req_id: any = null;

   var scroller = {
      target: document.querySelector("#page_scroll"),
      ease: 0.025,
      end_y: 0,
      y: 0,
      resize_req: 1,
      scroll_req: 0,
   };

   gsap.to(scroller.target, {
      rotation: 0.01,
      force3D: true,
   });

   //window.addEventListener("load", on_page_load);

   function on_page_load() {
      update_scroller();
      window.focus();
      window.addEventListener("resize", on_page_resize);
      window.addEventListener("scroll", on_page_scroll);
      console.log("added on_page_load event listeners resize and scroll");
   }
   on_page_load();

   function update_scroller() {
      let resized: boolean = scroller.resize_req > 0;

      if (resized) {
         let height: number = scroller.target.clientHeight;
         body.style.height = height + "px";
         scroller.resize_req = 0;
      }

      let scroll_y: number = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.end_y = scroll_y;
      scroller.y += (scroll_y - scroller.y) * scroller.ease;

      if (Math.abs(scroll_y - scroller.y) < 0.025 || resized) {
         scroller.y = scroll_y;
         scroller.scroll_req = 0;
      }

      gsap.to(scroller.target, {
         y: -scroller.y,
      });

      req_id = scroller.scroll_req > 0 ? requestAnimationFrame(update_scroller) : null;
   }

   function on_page_resize() {
      scroller.resize_req++;
      if (!req_id) {
         req_id = requestAnimationFrame(update_scroller);
      }
      console.log("resize");
   }

   function on_page_scroll() {
      scroller.scroll_req++;
      if (!req_id) {
         req_id = requestAnimationFrame(update_scroller);
      }
      console.log("scrolling");
   }
}

function lock_scrolling(val: boolean = true) {
   let locked: string;

   switch (val) {
      case true:
         locked = "hidden";
         break;
      case false:
         locked = "unset";
         break;
   }

   let body: Element | null = document.querySelector(".page");
   if (body) {
      body.setAttribute("style", `overflow: ${locked}`);
   } else {
      console.error("body element not found");
   }
}

export { add_smooth_scroll, lock_scrolling };
