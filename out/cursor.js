import { gsap } from "gsap";
function create_cursor_instance() {
    const cursor = document.querySelector("[data-cursor]");
    window.addEventListener("mousemove", (e) => {
        const pos_x = e.clientX;
        const pos_y = e.clientY;
        cursor.animate({
            left: `${pos_x}px`,
            top: `${pos_y}px`,
        }, {
            duration: 520,
            fill: "forwards",
            easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        });
    });
    return cursor;
}
function set_cursor_hoverable_listeners(cursor) {
    let hoverable_elements_list = document.querySelectorAll(".cursor_hoverable");
    let cursor_timeout;
    hoverable_elements_list.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            clearTimeout(cursor_timeout);
            cursor_timeout = setTimeout(() => {
                gsap.to(cursor, {
                    duration: 0.3,
                    width: 30,
                    height: 30,
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
//# sourceMappingURL=cursor.js.map