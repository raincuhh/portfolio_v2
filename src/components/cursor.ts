function add_cursor() {
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
}

export { add_cursor };
