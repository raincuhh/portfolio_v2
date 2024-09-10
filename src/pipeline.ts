import { get_id } from "./helper.js";

class pipeline {
   ready: boolean;
   constructor() {
      this.ready = false;
   }

   pipeline_init() {
      this.ready = true;
   }
}

window.onload = function () {
   let p_line: pipeline = new pipeline();

   if (!p_line.ready) {
      const root = get_id("root");

      if (!root || !root.parentElement) {
         console.log("ERROR, Failed initializing pipeline");
      }

      console.log("hello world!");

      p_line.pipeline_init();
   } else {
      console.log("ERROR, Pipeline already initialized somehow");
   }
};
