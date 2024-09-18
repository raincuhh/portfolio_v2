import { get_id } from "./helper.js";
import { pipeline } from "./pipeline.js";

window.onload = function () {
   let p_line: pipeline = new pipeline();

   if (!p_line.ready) {
      const root = get_id("root");

      if (!root || !root.parentElement) {
         console.log("ERROR, Failed initializing pipeline");
      }

      console.log(
         "%cMade by yours truly (filip ryan).",
         "background-color: #ffffff; color: #000000; font-size: 12px; padding: 8px 10px 6px; border-radius: 4px"
      );

      p_line.pipeline_init();
   } else {
      console.log("ERROR, Pipeline already initialized somehow");
   }
};
