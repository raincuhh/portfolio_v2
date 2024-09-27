import { get_id, create_el } from "./helper.js";
var project_langs;
(function (project_langs) {
    project_langs[project_langs["HTML"] = 0] = "HTML";
    project_langs[project_langs["CSS"] = 1] = "CSS";
    project_langs[project_langs["JS"] = 2] = "JS";
    project_langs[project_langs["TS"] = 3] = "TS";
    project_langs[project_langs["CPP"] = 4] = "CPP";
    project_langs[project_langs["C"] = 5] = "C";
    project_langs[project_langs["GDScript"] = 6] = "GDScript";
})(project_langs || (project_langs = {}));
class project_template {
    name;
    img_path;
    desc;
    langs_used;
    date;
    constructor(_name, _img_path, _desc, _langs_used, _date) {
        this.name = _name;
        this.img_path = _img_path;
        this.desc = _desc;
        this.langs_used = _langs_used;
        this.date = _date;
    }
}
class full_project_template {
    project_template;
    id;
    constructor(_project_template, _id) {
        this.project_template = _project_template;
        this.id = _id;
    }
}
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