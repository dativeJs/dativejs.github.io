import Dative from "dativejs";
import footer from "./footer.dative.html";

export let Footer = Dative.extend({
  template: footer,
  data() {
    return {
      year: () => new Date().getFullYear(),
    };
  },
  props: {
    transformer: Function,
  },
});