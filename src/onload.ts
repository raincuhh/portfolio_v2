import { get_id } from "./helper.js";
import { main } from "./main.js";

window.onload = function () {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, Failed initializing pipeline");
   }

   console.log(
      "%cMade by yours truly (filip ryan).",
      "background-color: #ffffff; color: #000000; font-size: 12px; padding: 8px 10px 6px; border-radius: 4px"
   );
};

document.addEventListener("DOMContentLoaded", () => {
   const root = get_id("root");

   if (!root || !root.parentElement) {
      console.log("ERROR, no root element found");
   }

   console.log(
      "%cMade by yours truly (filip ryan).",
      "background-color: #ffffff; color: #000000; font-size: 12px; padding: 8px 10px 6px; border-radius: 4px"
   );

   main();
});
