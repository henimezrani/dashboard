import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: localStorage.getItem("x-token") ? true : false,
      type: "brand"
    },
    HTMLColors: [
      "Pink",
      "LightPink",
      "HotPink",
      "DeepPink",
      "PaleVioletRed",
      "MediumVioletRed",
      "LightSalmon",
      "Salmon",
      "DarkSalmon",
      "LightCoral",
      "IndianRed",
      "Crimson",
      "Firebrick",
      "DarkRed",
      "Red",
      "OrangeRed",
      "Tomato",
      "Coral",
      "DarkOrange",
      "Orange",
      "Yellow",
      "LightYellow",
      "LemonChiffon",
      "LightGoldenrodYellow ",
      "PapayaWhip",
      "Moccasin",
      "PeachPuff",
      "PaleGoldenrod",
      "Khaki",
      "DarkKhaki",
      "Gold",
      "Cornsilk",
      "BlanchedAlmond",
      "Bisque",
      "NavajoWhite",
      "Wheat",
      "Burlywood",
      "Tan",
      "RosyBrown",
      "SandyBrown",
      "Goldenrod",
      "DarkGoldenrod",
      "Peru",
      "Chocolate",
      "SaddleBrown",
      "Sienna",
      "Brown",
      "Maroon",
      "DarkOliveGreen",
      "Olive",
      "OliveDrab",
      "YellowGreen",
      "LimeGreen",
      "Lime",
      "LawnGreen",
      "Chartreuse",
      "GreenYellow",
      "SpringGreen",
      "MediumSpringGreen ",
      "LightGreen",
      "PaleGreen",
      "DarkSeaGreen",
      "MediumAquamarine",
      "MediumSeaGreen",
      "SeaGreen",
      "ForestGreen",
      "Green",
      "DarkGreen",
      "Aqua",
      "Cyan",
      "LightCyan",
      "PaleTurquoise",
      "Aquamarine",
      "Turquoise",
      "MediumTurquoise",
      "DarkTurquoise",
      "LightSeaGreen",
      "CadetBlue",
      "DarkCyan",
      "Teal",
      "LightSteelBlue",
      "PowderBlue",
      "LightBlue",
      "SkyBlue",
      "LightSkyBlue",
      "DeepSkyBlue",
      "DodgerBlue",
      "CornflowerBlue",
      "SteelBlue",
      "RoyalBlue",
      "Blue",
      "MediumBlue",
      "DarkBlue",
      "Navy",
      "MidnightBlue",
      "Lavender",
      "Thistle",
      "Plum",
      "Violet",
      "Orchid",
      "Fuchsia",
      "Magenta",
      "MediumOrchid",
      "MediumPurple",
      "BlueViolet",
      "DarkViolet",
      "DarkOrchid",
      "DarkMagenta",
      "Purple",
      "Indigo",
      "DarkSlateBlue",
      "SlateBlue",
      "MediumSlateBlue ",
      "White",
      "Snow",
      "Honeydew",
      "MintCream",
      "Azure",
      "AliceBlue",
      "GhostWhite",
      "WhiteSmoke",
      "Seashell",
      "Beige",
      "OldLace",
      "FloralWhite",
      "Ivory",
      "AntiqueWhite",
      "Linen",
      "LavenderBlush",
      "MistyRose",
      "Gainsboro",
      "LightGray",
      "Silver",
      "DarkGray",
      "Gray",
      "DimGray",
      "LightSlateGray",
      "SlateGray",
      "DarkSlateGray",
      "Black"
    ].sort(),
    tagList: [
      "Festival",
      "Holidays",
      "Wedding",
      "Chic",
      "Fashion",
      "Sport-Chic",
      "Workwear",
      "Trending",
      "Going Out",
      "Sports",
      "Classy",
      "Street Style",
      "Luxury"
    ],
    categories: [
      "Dresses",
      "Footwear",
      "Jeans & Trousers",
      "Jewelery & Watches",
      "Knitwear & Sweats",
      "Outerwear",
      "Skirts",
      "Shorts",
      "Suits",
      "Swimwear",
      "Tops"
    ],
    genders: ["Men", "Women"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  getters: {
    auth(state) {
      return state.user;
    },
    userType(state) {
      state.type;
    }
  },
  mutations: {
    UPDATE_LOGIN: (state, boo) => {
      state.user.loggedIn = boo;
    },
    UPDATE_TYPE: (state, value) => {
      state.user.type = value;
      console.log(state.user.type);
    }
  },
  actions: {
    VERIFY_TOKEN: async function(state) {
      axios
        .get("http://localhost:3000/api/brand/verifytoken")
        .then(res => {
          this.commit("UPDATE_LOGIN", true);
        })
        .catch(err => {
          this.commit("UPDATE_LOGIN", false);
        });
    }
  }
});
