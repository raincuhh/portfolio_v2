import {
   project_langs,
   project_template,
   full_project_template,
} from "./project_templates.js";

import { get_id, create_el } from "../../helper.js";

class project_manager {
   projects: Array<full_project_template>;

   constructor() {
      this.projects = [];
   }

   get_new_project_template(
      name: string,
      img_path: string,
      desc: string,
      langs_used: Array<project_langs>,
      date: string
   ) {
      let proj_templ: project_template = new project_template(
         name,
         img_path,
         desc,
         langs_used,
         date
      );
      return proj_templ;
   }

   new_project(
      name: string,
      img_path: string,
      desc: string,
      langs_used: Array<project_langs>,
      date: string,
      id: number
   ) {
      let proj_templ: project_template = this.get_new_project_template(
         name,
         img_path,
         desc,
         langs_used,
         date
      );
      this.projects.push(new full_project_template(proj_templ, id));
   }

   make_preview_project_html(
      finished_project_template: full_project_template,
      _project_section_parent: string = "project_section"
   ) {
      let project_section_parent: HTMLElement | null = get_id(
         _project_section_parent
      );

      // parent appending
      let proj_parent: HTMLElement = create_el("div");
      proj_parent.setAttribute("class", "project");
      proj_parent.setAttribute(
         "id",
         "project_id_" + finished_project_template.id.toString()
      );
      project_section_parent?.appendChild(proj_parent);

      // project title
   }

   load_all_projects() {
      for (const proj of this.projects) {
         this.make_preview_project_html(proj);
      }
   }
}

export { project_manager };
