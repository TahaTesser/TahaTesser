/** @jsx h */

import blog from "blog";

blog({
  title: "Taha Tesser",
  author: "Taha Tesser",
  description: "Flutter blog",
  avatar: "./assets/meta/taha.jpg",
  avatarClass: "rounded-full",
  links: [
    { title: "Twitter", url: "https://twitter.com/TahaTesser" },
    { title: "GitHub", url: "https://github.com/TahaTesser" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/tahatesser/" },
    { title: "Email", url: "mailto:tessertaha@gmail.com" },
  ],
  background: "#e6f7ff",
  lang: "en",
  dateStyle: "long", // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  favicon: "favicon.ico",
});
