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

export { pipeline };
