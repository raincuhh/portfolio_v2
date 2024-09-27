import { project_template, full_project_template, } from "./project_templates.js";
import { get_id, create_el } from "../../helper.js";
class project_manager {
    projects;
    constructor() {
        this.projects = [];
    }
    get_new_project_template(name, img_path, desc, langs_used, date) {
        let proj_templ = new project_template(name, img_path, desc, langs_used, date);
        return proj_templ;
    }
    new_project(name, img_path, desc, langs_used, date, id) {
        let proj_templ = this.get_new_project_template(name, img_path, desc, langs_used, date);
        this.projects.push(new full_project_template(proj_templ, id));
    }
    make_preview_project_html(finished_project_template, _project_section_parent = "project_section") {
        let project_section_parent = get_id(_project_section_parent);
        // parent appending
        let proj_parent = create_el("div");
        proj_parent.setAttribute("class", "project");
        proj_parent.setAttribute("id", "project_id_" + finished_project_template.id.toString());
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
//# sourceMappingURL=project.js.map