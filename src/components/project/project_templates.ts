enum project_langs {
   HTML = 0,
   CSS,
   JS,
   TS,
   CPP,
   C,
   GDScript,
}

class project_template {
   name: string;
   img_path: string;
   desc: string;
   langs_used: Array<project_langs>;
   date: string;

   constructor(
      _name: string,
      _img_path: string,
      _desc: string,
      _langs_used: Array<project_langs>,
      _date: string
   ) {
      this.name = _name;
      this.img_path = _img_path;
      this.desc = _desc;
      this.langs_used = _langs_used;
      this.date = _date;
   }
}

class full_project_template {
   project_template: project_template;
   id: number;

   constructor(_project_template: project_template, _id: number) {
      this.project_template = _project_template;
      this.id = _id;
   }
}

export { project_langs, project_template, full_project_template };
