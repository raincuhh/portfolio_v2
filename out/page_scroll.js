import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
function add_smooth_scroll() {
    let html = document.documentElement;
    let body = document.body;
    let req_id = null;
    var scroller = {
        target: document.querySelector("#page_scroll_wrapper"),
        ease: 0.05,
        end_y: 0,
        y: 0,
        resize_req: 1,
        scroll_req: 0,
    };
    gsap.to(scroller.target, {
        rotation: 0.01,
        force3D: true,
    });
    window.addEventListener("load", on_page_load);
    function on_page_load() {
        update_scroller();
        window.focus();
        window.addEventListener("resize", on_page_resize);
        window.addEventListener("scroll", on_page_scroll);
    }
    function update_scroller() {
        let resized = scroller.resize_req > 0;
        if (resized) {
            let height = scroller.target.clientHeight;
            body.style.height = height + "px";
            scroller.resize_req = 0;
        }
        let scroll_y = window.screenY || html.scrollTop || body.scrollTop || 0;
        scroller.end_y = scroll_y;
        scroller.y += (scroll_y - scroller.y) * scroller.ease;
        if (Math.abs(scroll_y - scroller.y) < 0.05 || resized) {
            scroller.y = scroll_y;
            scroller.scroll_req = 0;
        }
        gsap.to(scroller.target, {
            y: -scroller.y,
        });
    }
    function on_page_resize() {
        scroller.resize_req++;
        if (!req_id) {
            req_id = requestAnimationFrame(update_scroller);
        }
        console.log(scroller.resize_req);
    }
    function on_page_scroll() {
        scroller.scroll_req++;
        if (!req_id) {
            req_id = requestAnimationFrame(update_scroller);
        }
    }
}
export { add_smooth_scroll };
/*
TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});


function updateScroller() {
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }

  TweenLite.set(scroller.target, {
    y: -scroller.y
  });

  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
*/
//# sourceMappingURL=page_scroll.js.map