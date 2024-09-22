enum Languages {
   English = 0,
   Norwegian,
}

const translations: {
   [key: string]: {
      [key in Languages]: string;
   };
} = {
   "contact me at": {
      [Languages.English]: "contact me at",
      [Languages.Norwegian]: "",
   },
   "change the theme": {
      [Languages.English]: "change the theme",
      [Languages.Norwegian]: "bytt tema",
   },
   black: {
      [Languages.English]: "black",
      [Languages.Norwegian]: "svart",
   },
   white: {
      [Languages.English]: "white",
      [Languages.Norwegian]: "hvit",
   },
};

function loc(str: string | null, lang: Languages): string {
   if (!str) return "";
   const translation = translations[str];
   if (translation) {
      return translation[lang] || str;
   }
   return str;
}

export { loc, Languages };
