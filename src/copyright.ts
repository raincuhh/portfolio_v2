function set_copyright_year(): void {
   let date: Date = new Date();
   let year: number = date.getFullYear();
   let copyright_year_divs: NodeListOf<Element> | null = document.querySelectorAll("#copyright_year");

   if (copyright_year_divs) {
      copyright_year_divs.forEach((e: Element) => {
         e.textContent = year.toString();
      });
   }
}

export { set_copyright_year };
