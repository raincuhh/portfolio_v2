const translations: {
   [key: string]: {
      [key in Languages]: string;
   };
} = {};

enum Languages {
   English,
   Norwegian,
}

function loc(str: string, lang: Languages) {
   if (!str) return "";
   const translation = translations[str];
   // localization not implemented
   return str;
}

export { loc, Languages };
