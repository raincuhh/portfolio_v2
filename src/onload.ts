// main entrypoint into the program

import { get_id } from "./helper.js";
import { main } from "./main.js";

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
      return;
   }

   console.log(
      "%cMade by yours truly (filip ryan).",
      "background-color: #ffffff; color: #000000; font-size: 12px; padding: 8px 10px 6px; border-radius: 4px"
   );

   main();
});

window.onunload = () => {
   window.scrollTo(0, 0);
};
