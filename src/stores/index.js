import { defineStore } from 'dytejs'
import { teams } from './teams.store'
import { icons } from './icons.store'



export default defineStore({
  state: {
    title: "Dative.js",
    teams,
    icons,
    social_icon: [
      { name: "github", link: "https://github.com/dativeJs/dativejs" },
      { name: "twitter", link: "https://twitter.com/dativejs" },
      // { name: "discord", link: "https://discord.com/xa2xqedax" },
    ],
  },
  actions: {
    useMedia: (str) => matchMedia(str).matches,
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  },
  getters: {
    uppercaseTitle() {
      return this.title.toUpperCase();
    },
  },
});