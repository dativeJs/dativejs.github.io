import Dative from "dativejs";
import { swing } from "dativejs/animation";
import template from "./navbar.dative.html";

export let NavBar = Dative.extend({
  template,
  props: {
    logo: String,
    icons: Array,
    toggleSidebar: Function,
  },
  animate: {
    swing,
  },
});