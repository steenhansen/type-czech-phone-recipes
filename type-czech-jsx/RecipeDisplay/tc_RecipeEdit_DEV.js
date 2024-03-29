import { isNode } from "../../import-2-require/common-2-import.js";
import { SPEC_RECIPE_TYPES } from "../../import-2-require/tc-types-2-import";
import { type_czech } from "../../import-2-require/make-Type-Czech-import";

export { PRE_RecipeEdit };

if (typeof symbol_does_not_exist === "symbol") {
  throw "tc_RecipeEdit.js"; // so can easily see if the code in this file is in browser javascript
}

function PRE_RecipeEdit(the_props, _extra_react_obj_1, _extra_react_obj_2) {
  if (the_props.the_recipe?._id) {
    // if a new recipe then no _id and nothing to check
    if (isNode()) {
      throw "THIS never runs on the server !!!!!!!";
    } else {
      const the_params = [the_props, _extra_react_obj_1, _extra_react_obj_2];
      const props_signature = {
        filtered_recipes: "array",
        the_recipe: SPEC_RECIPE_TYPES,
      };
      // "_typeExtra" ignores the undefined _extra_react_obj_2
      const browser_signature = [props_signature, "object"];
      const browser_type_issue = type_czech.checkParam_typeExtra(the_params, browser_signature);
      if (browser_type_issue) return browser_type_issue;
    }
  }
}
