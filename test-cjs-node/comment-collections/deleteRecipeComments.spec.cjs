//  cd /
//  npm run test-single -- test-cjs-node/**/deleteRecipeComments.spec.cjs
//  npm run test-node

const { GLOBAL_CONFIG } = require("../node-config.cjs");
global.GLOBAL_CONFIG = GLOBAL_CONFIG;

const { newRecipe } = require("../../mongoose-database/recipe-collections");
const { addComment, deleteCommentsOnRecipe } = require("../../mongoose-database/comment-collections");

require("../load-db.cjs");
const chai = require("chai");
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;

const new_recipe = {
  _id: "wjh499@gmail.com~OLD-TITLE~",
  cook: "wjh499@gmail.com",
  comments: [],
  search: " OLD-TITLE steps ",
  title: "OLD-TITLE",
  steps: "steps",
  serves: "serves",
  time: "time",
  meal: "Lunch",
  cuisine: "French",
  diet: "Vegan",
  ingredients: [],
  internal: "145c",
  minutes: 12,
};

const new_comment = {
  recipe_id: "wjh499@gmail.com~OLD-TITLE~",
  by: "wjh499@gmail.com",
  remark: "remark",
  title: "OLD-TITLE",
};

const expected = { acknowledged: true, deletedCount: 1 };

async function do_delete_Comments_On_Recipe() {
  await Recipes_coll.deleteMany();
  await Comments_coll.deleteMany();
  await newRecipe(new_recipe);
  await addComment(new_comment);
  const actual = await deleteCommentsOnRecipe("wjh499@gmail.com~OLD-TITLE~");
  return actual;
}

describe("deleteRecipeComments.spec", () => {
  describe("#deleteCommentsOnRecipe", () => {
    it("returns unber of deleted comments", async () => {
      const actual = await do_delete_Comments_On_Recipe();
      expect(actual).to.deep.equalInAnyOrder(expected);
    });
  });
});
