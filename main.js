import blog, { ga, redirects  } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Taha Tesser",
  author: "Taha Tesser",
  avatar: "./assets/meta/taha.jpg",

  avatarClass: "full",
  links: [
    { title: "Twitter",  url: "https://twitter.com/TahaTesser" },
    { title: "GitHub", url: "https://github.com/TahaTesser" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/tahatesser/" },
    { title: "Email", url: "mailto:tessertaha@gmail.com" },
  ],
  background: "#e6f7ff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
  favicon: "./assets/meta/favicon.ico",
});

