import Dative from "dativejs";
import template from "./sidebar.dative.html";

export let SideBar = Dative.extend({
  template,
  props: {
    sidebar: Object,
  },
});
