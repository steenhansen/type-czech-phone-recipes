//  cd /
//  npx vitest /test-jsx-browser/redux-store/reduxReTitleRecipe_no_comments.test.mjs  --silent

//  npx vitest /test-jsx-browser  --silent

// To see Type-Czech messages
// npx vitest /test-jsx-browser

import { VITEST_CONFIG } from "../vitestGlobal";
global.GLOBAL_CONFIG = VITEST_CONFIG;
import { expect, describe, it } from "vitest";
import { reduxReTitleRecipe } from "../../redux-store/recipe-store.js";

const state = {
  current_recipes: [
    {
      _id: "abc194@gmail.com~the-title~",
      cook: "abc194@gmail.com",
      title: "the-title",
      steps: "str",
      serves: "str",
      time: "str",
      meal: "str",
      cuisine: "str",
      diet: "str",
      internal: "str",
      search: "str",
      minutes: 17,
      ingredients: [],
      comments: [],
    },
  ],
  current_remarks: [],
};

const action = {
  type: "change-recipe",
  payload: {
    old_title: "the-title",
    re_titled_recipe: {
      _id: "abc194@gmail.com~new-title~",
      cook: "abc194@gmail.com",
      title: "new-title",
      steps: "str",
      serves: "str",
      time: "str",
      meal: "str",
      cuisine: "str",
      diet: "str",
      internal: "str",
      search: "str",
      minutes: 17,
      ingredients: [],
      comments: [],
    },
  },
};
const actual_state = reduxReTitleRecipe(state, action);

const expected_state = {
  current_recipes: [
    {
      _id: "abc194@gmail.com~new-title~",
      cook: "abc194@gmail.com",
      title: "new-title",
      steps: "str",
      serves: "str",
      time: "str",
      meal: "str",
      cuisine: "str",
      diet: "str",
      internal: "str",
      search: " new-title str ",
      minutes: 17,
      ingredients: [],
      comments: [],
    },
  ],
  current_remarks: [],
};

describe("Recipe-Collections", () => {
  describe("#changeRecipe", () => {
    it("#changeRecipe", () => {
      expect(actual_state).toEqual(expected_state);
    });
  });
});
