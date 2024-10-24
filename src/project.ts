import { get_id, create, query } from "./helper.js";
import { update_scroller } from "./page_scroll.js";

enum tools {
   HTML = 0,
   CSS,
   JS,
   TS,
   CPP,
   C,
   GDScript,
   Godot,
   Pixelorama,
   Photoshop,
}

class project_template {
   name: string;
   img_path: string;
   repo_path: string;
   desc: Array<string>;
   tools: Array<tools>;
   date: string;

   constructor(
      _name: string,
      _img_path: string,
      _repo_path: string,
      _desc: Array<string>,
      _tools: Array<tools>,
      _date: string
   ) {
      this.name = _name;
      this.img_path = _img_path;
      this.repo_path = _repo_path;
      this.desc = _desc;
      this.tools = _tools;
      this.date = _date;
   }
}

let project_list: Array<project_template> = [];

function tool_to_str(tool: tools): string {
   switch (tool) {
      case tools.C:
         return "C";
      case tools.CSS:
         return "Css";
      case tools.CPP:
         return "C++";
      case tools.GDScript:
         return "GdScript";
      case tools.Godot:
         return "Godot";
      case tools.HTML:
         return "Html";
      case tools.JS:
         return "JavaScript";
      case tools.Photoshop:
         return "PhotoShop";
      case tools.Pixelorama:
         return "Pixelorama";
      case tools.TS:
         return "TypeScript";
   }
}

function get_project_info_html_construct(template: project_template, i: number): Element {
   // parent
   let project_info_container_div: Element = create("section");
   project_info_container_div.setAttribute("class", "project_info");

   // stuff like tools, year, repository, etc.
   let project_info_aside_div: Element = create("aside");
   project_info_aside_div.setAttribute("class", "project_info_aside");
   project_info_container_div?.appendChild(project_info_aside_div);

   // tools
   let project_info_aside_tools_div: Element = create("div");
   project_info_aside_tools_div.textContent = "tools: ";
   project_info_aside_tools_div.setAttribute("class", "project_info_aside_tool_list");
   project_info_aside_div?.appendChild(project_info_aside_tools_div);

   template.tools.forEach((tool: tools) => {
      let tool_div: Element = create("span");
      let str_of_tool: string = tool_to_str(tool);
      tool_div.textContent = "";
      project_info_aside_tools_div?.appendChild(tool_div);
   });

   // info desc
   let project_info_desc_div: Element = create("div");
   project_info_desc_div.setAttribute("class", "project_info_desc");
   project_info_container_div?.appendChild(project_info_desc_div);

   template.desc.forEach((desc: string) => {
      let project_info_desc_section_div: Element = create("p");
      project_info_desc_section_div.textContent = desc;
      project_info_desc_div?.appendChild(project_info_desc_section_div);
   });

   return project_info_container_div;
}

function get_project_html_construct(template: project_template, i: number): Element {
   // project
   let project_div: Element = create("div");
   project_div.setAttribute("class", "project");

   // container
   let container_div: Element = create("div");
   container_div.setAttribute("class", "project_cont");
   project_div?.appendChild(container_div);

   // header
   let project_header_div: Element = create("header");
   project_header_div.setAttribute("class", "project_header");
   container_div?.appendChild(project_header_div);

   // p
   let project_header_p_div: Element = create("p");
   project_header_p_div.textContent = template.name;
   project_header_div?.appendChild(project_header_p_div);

   // header section tag
   let section_tag_div: Element = create("span");
   section_tag_div.setAttribute("class", "section_tag");
   section_tag_div.textContent = `[${i}]`;
   project_header_div?.appendChild(section_tag_div);

   // image
   let project_image_div: Element = create("img");
   project_image_div.setAttribute("class", "project_image");
   project_image_div.setAttribute("src", template.img_path);
   project_image_div.setAttribute("alt", `failed to load: "${template.img_path}"`);
   container_div?.appendChild(project_image_div);

   // project info container
   let project_info_container_div: Element = get_project_info_html_construct(template, i);
   container_div?.appendChild(project_info_container_div);

   return project_div;
}

function make_project_html(template: project_template, parent_div: Element, i: number) {
   let project_div: Element = get_project_html_construct(template, i);
   parent_div?.appendChild(project_div);
}

function load_all_projects() {
   let project_section_parent: Element | null = query("#projects_list");

   project_list.forEach((project: project_template, i: number) => {
      make_project_html(project, project_section_parent, i + 1);
   });
}

function new_project(
   name: string,
   img_path: string,
   repo_path: string,
   desc: Array<string>,
   tools: Array<tools>,
   date: string
) {
   let template: project_template = new project_template(name, img_path, repo_path, desc, tools, date);
   project_list.push(template);
}

function create_projects() {
   new_project(
      '"joy"ride',
      "../assets/project_previews/joyride_preview.png",
      "https://github.com/raincuhh/JoyRide",
      ["test test test line 1", "test test test line 2"],
      [tools.GDScript, tools.Godot, tools.Photoshop, tools.Pixelorama],
      "2023"
   );
   new_project(
      "the passage",
      "../assets/project_previews/thepassage_preview.jpg",
      "https://github.com/raincuhh/the-passage",
      ["test test test line 1", "test test test line 2"],
      [tools.GDScript, tools.Godot],
      "2023"
   );
   new_project(
      "amanises",
      "../assets/project_previews/amanises_preview.jpg",
      "https://github.com/raincuhh/amanises",
      ["test test test line 1", "test test test line 2"],
      [tools.CPP],
      "2024"
   );
}

export function init_projects() {
   create_projects();
   load_all_projects();
}
