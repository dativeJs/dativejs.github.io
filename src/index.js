import Dative from "dativejs";
import { connect } from "dytejs";
import helper from "@dativejs/helpers";
import Prism from "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/treeview/prism-treeview";
// import 'prismjs/plugins/show-language/prism-show-language'
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-js-extras";
import "prismjs/components/prism-js-templates";
import "@fortawesome/fontawesome-free/js/all";
import store from "../src/stores";
import { slidein, slideright, fadein } from "./animations";
import { SideBar } from "./sidebar/sidebar.dative";
import { NavBar } from "./navbar/navbar.dative";
import { Footer } from "./footer/footer.dative";
import { Ads } from "./ads/ads.dative";
import Home from "./home/home.dative.html";
import Teams from "./teams/teams.dative.html";
import Api from "./api/api.dative.html";
import Guide from "./guide/guide.dative.html";
import Migration from "./migration/migration.dative.html";
import logo from "../public/logo.png";
import "../public/output.css";
import "../assets/css/prism.css";
import "../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "prismjs/plugins/treeview/prism-treeview.css";

let sidebar, navbar, footer;

let app = new Dative({
  el: "#app",
  onmounted() {
    setTimeout(() => Prism.highlightAll(), 0);
  },
  data: () => ({
    name: "Dativejs",
    head_list: ["Home", "Github"],
    dark: "(prefers-color-scheme: dark)",
  }),
  use: [store, helper],
  animate: {
    slideright,
    slidein,
    fadein,
  },
  template:
    location.pathname === "/" || location.pathname === "/index.html"
      ? Home
      : location.pathname === "/teams" ||
        location.pathname === "/teams/index.html"
      ? Teams
      : location.pathname === "/api" || location.pathname === "/api/index.html"
      ? Api
      : location.pathname === "/guide" ||
        location.pathname === "/guide/index.html"
      ? Guide
      : location.pathname === "/migration" ||
        location.pathname === "/migration/index.html"
      ? Migration
      : 404,
    methods: {
       /**
       * @param timestamp timestamp for the date
       */
      transformer: (timestamp) => {
        const date = new Date(timestamp);
        const digits = [
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
        ].map((num) => String(num).padStart(1, 1));
        return "{0}-{1}-{2}, {3}:{4}:{5}".replace(
          /{(\d)}/g,
          (_, num) => digits[num]
        );
      }
    }
});
// app.use(store)
connect()(app);
window.app = app;

if (document.querySelector("#sidebar")) {
  sidebar = new SideBar({
    el: "#sidebar",
    props: {
      sidebar: [
        {
          title: "Guide",
          path: "/guide/index.html",
          children: [
            {
              title: "Introduction",
              path: "/guide/index.html",
            },
            {
              title: "Installation",
              path: "/guide/index.html#installation",
            },
            {
              title: "Data and Methods",
              path: "/guide/index.html#data-and-methods",
            },
            {
              title: "Computed",
              path: "/guide/index.html#computed",
            },
            {
              title: "#if",
              path: "/guide/index.html#conditional-rendering",
            },
            {
              title: "#each",
              path: "/guide/index.html#for-loop",
            },
            {
              title: "Extend",
              path: "/guide/index.html#extend",
            },
            {
              title: "Event",
              path: "/guide/index.html#event",
            },
            {
              title: "Property",
              path: "/guide/index.html#property",
            },
            {
              title: "Plugin",
              path: "/guide/index.html#plugin",
            },
            {
              title: "@debug",
              path: "/guide/index.html#debug",
            },
            {
              title: "#with",
              path: "/guide/index.html#with",
            },
            {
              title: "Directives",
              path: "/guide/index.html#directives",
            },
            {
              title: "define Api",
              path: "/guide/index.html#define-api",
            },
            {
              title: "Comment",
              path: "/guide/index.html#comment",
            },
            {
              title: "Variable",
              path: "/guide/index.html#variable",
            },
            {
              title: "Animations",
              path: "/guide/index.html#animation",
            },
          ],
        },
        {
          title: "Api",
          path: "/api/index.html",
        },
        {
          title: "Teams",
          path: "/teams/index.html",
        },
        {
          title: "Migration",
          path: "/migration/index.html",
        },
      ],
    },
    attach: app,
  });
}

if (document.querySelector("#navbar")) {
  navbar = new NavBar({
    el: "#navbar",
    attach: app,
    props: {
      logo: logo,
      icons: [
        { name: "github", link: "https://github.com/dativeJs/dativejs" },
        { name: "twitter", link: "https://twitter.com/dativejs" },
      ],
      toggleSidebar() {
        var navi = sidebar.$ref.navbar;
        if (navi.style.width === "0px") navi.style.width = "50%";
        else navi.style.width = "0px";
      },
    },
  });
}

if (document.querySelector("#footer")) {
  footer = new Footer({
    el: "#footer",
    attach: app,
    props: {
      /**
       * @param timestamp timestamp for the date
       */
      transformer: (timestamp) => {
        const date = new Date(timestamp);
        const digits = [
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
        ].map((num) => String(num).padStart(1, 1));
        return "{0}-{1}-{2}, {3}:{4}:{5}".replace(
          /{(\d)}/g,
          (_, num) => digits[num]
        );
      },
    },
  });
}

if (document.querySelector("#ads")) {
  new Ads({
    target: "#ads",
    attach: app,
  });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
