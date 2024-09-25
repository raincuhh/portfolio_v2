import { gsap } from "gsap";

function create_cursor_instance(): Element {
   const cursor: Element = document.querySelector("[data-cursor]");

   window.addEventListener("mousemove", (e: MouseEvent) => {
      const pos_x: number = e.clientX;
      const pos_y: number = e.clientY;

      cursor.animate(
         {
            left: `${pos_x}px`,
            top: `${pos_y}px`,
         },
         {
            duration: 520,
            fill: "forwards",
            easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
         }
      );
   });

   return cursor;
}

function set_cursor_hoverable_listeners(cursor: Element): void {
   let hoverable_elements_list: NodeListOf<Element> = document.querySelectorAll(".cursor_hoverable");
   let cursor_timeout;

   hoverable_elements_list.forEach((e: Element) => {
      e.addEventListener("mouseenter", () => {
         clearTimeout(cursor_timeout);
         cursor_timeout = setTimeout(() => {
            gsap.to(cursor, {
               duration: 0.3,
               width: 20,
               height: 20,
               ease: "power4.inout",
            });
         }, 10);
      });
      e.addEventListener("mouseleave", () => {
         clearTimeout(cursor_timeout);
         cursor_timeout = setTimeout(() => {
            gsap.to(cursor, {
               duration: 0.3,
               width: 10,
               height: 10,
               ease: "power4.inout",
            });
         }, 10);
      });
   });
}

export { create_cursor_instance, set_cursor_hoverable_listeners };
