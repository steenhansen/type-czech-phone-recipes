var path = import('path');





const HTTP_PORT = 3000;

const FAKE_TEST_GMAIL = "fake-test@gmail.com";
const ONLY_ONE_RECIPE_UNFURLED = false;
const SELF_COMMENTS_ALLOWED = true;
const MAX_TEST_AJAX_DELAY_SEC = 3007;
const SHORTEST_STRING_LEN = 3;
const MONGO_CONNECT_TIMEOUT = 4000;
const MAX_RECIPES_SHOWN = 10;
const ID_SEPARATOR = '~';
const REMOVE_RECORD_VERSION = '-__v';
const MONGO_AUTO_INDEX = true;
const FILTER_FIRST_SECTION = 'get-api';
const VALID_REDUCERS = ['record-error', 're-title-recipe', 'change-recipe', 'new-recipe',
  'delete-recipe', 'filtered-recipes', 'add-comment', 'remove-comment'];
const DEFAULT_CONFIG = {
  G_SELENIUM_TESTING: false,
  G_RECIPES_COLLECTION: 'default-un-initialized-recipes',
  G_COMMENTS_COLLECTION: 'default-un-initialized-comments',
  G_UNCAUGHT_COLLECTION: 'default-un-initialized-uncaughts',
  G_DATABASE_NAME: 'local-ui',
  G_TYPE_CZECH_ON: false,
  G_TYPE_CZECH_OPTIONS: []
}
const NOP_TYPE_CZECH = { linkUp: (nop) => nop, isActive: (x) => false, isPruned: (y) => false };


function rootAppRequire(prog_root, name = '') {
  if (name === '') {
    return 'using-heroku-env-vars--no-config-file'
  }
  var app_root_dir = path.join(prog_root, name);
  return require(app_root_dir);
};

function commentIdToRecipeId(comment_id) {
  const comment_arr = comment_id.split(ID_SEPARATOR);
  const [recipe_cook, recipe_title] = comment_arr;
  const recipe_id = recipe_cook + ID_SEPARATOR + recipe_title + ID_SEPARATOR
  return recipe_id;
}
function safeEmail(an_email) {
  const email_arr = an_email.split('?');
  const upper_email = email_arr[0];
  const gmail_regex = /^.+@gmail\.com$/i;
  const safe_email = upper_email.toLowerCase();
  if (safe_email.match(gmail_regex)) {
    return safe_email;
  }
  return '';
}

function safeReturns(steps_lines) {
  const newline_windows = steps_lines.replace(/\r\n/g, "\n");
  const newline_apple = newline_windows.replace(/\r/g, "\n");
  const safe_string = newline_apple.replace(/[^a-zA-Z0-9_ \n-]/g, " ");
  return safe_string;
}

function safeStrip(title_or_comment) {
  const safe_string = title_or_comment.replace(/[^a-zA-Z0-9_ -]/g, " ");
  return safe_string;
}

// "My-Title_22" => "test-id-my-title_22" for easy testing
function testIdStrip(title_or_comment) {
  const safe_string = title_or_comment.replace(/[^a-zA-Z0-9_-]/g, "");
  const lower_safe = safe_string.toLowerCase();
  const test_id_strip = 'test-id-' + lower_safe;
  return test_id_strip;
}

function userToUrl(user_email) {
  const email_arr = user_email.split('@');
  const user_url = '/' + email_arr.join('/');
  return user_url;
}

function CookOnOwnPage(shared_auth_email, url) {
  let cook_on_own_page = false;
  if (shared_auth_email !== '') {
    const user_url = userToUrl(shared_auth_email);
    const url_array = url.split('?');
    const current_url = url_array[0];
    cook_on_own_page = (user_url === current_url)
  }
  return cook_on_own_page;
}

function urlToRecipeId(start_gmail, end_gmail, recipe_name) {
  const recipe_id = start_gmail + '@' + end_gmail + ID_SEPARATOR + recipe_name + ID_SEPARATOR;
  return recipe_id;
}

function objectLength(an_object) {
  return Object.keys(an_object).length;
}

function isNode() {
  let is_node = false;
  if (typeof process === 'object') {
    if (typeof process.versions === 'object') {
      if (typeof process.versions.node !== 'undefined') {
        is_node = true;
      }
    }
  }
  return is_node;
}

function matchingRecipes(filtered_recipes, recipe_count) {
  const total_matches = filtered_recipes.length;
  let number_of_matches = `No Matching Recipes`;
  if (total_matches === 1) {
    number_of_matches = `1 Matching Recipe Out Of ${recipe_count}`;
  } else if (total_matches > 1) {
    number_of_matches = `${total_matches} Matching Recipes Out Of ${recipe_count}`;
  }
  return number_of_matches;
}

function vanillaPageContext(server_varname) {
  const the_script = document.getElementById("vite-plugin-ssr_pageContext");
  if (the_script) {
    const server_values = JSON.parse(the_script.textContent);
    const server_value = server_values.pageContext[server_varname];
    return server_value;
  }
  return false;   // storybook always exits here as no pageContext exists
}

function herokuEnvOrConfigFile(prog_root) {
  const credentials_file = process.argv[2];
  let the_config;
  if (credentials_file) {
    const { GLOBAL_CONFIG } = rootAppRequire(prog_root, credentials_file);
    the_config = GLOBAL_CONFIG;
  } else {
    const running_path = process.argv[1];
    const path_parts = running_path.split(path.sep);
    const run_prog = path_parts.pop();
    if (run_prog !== 'app') {
      throw 'You forgot the credentials file, like ../prod-config.js';
    }
    the_config = DEFAULT_CONFIG;
  }
  return the_config;
}




export {
  FAKE_TEST_GMAIL, FILTER_FIRST_SECTION, HTTP_PORT, ID_SEPARATOR, MAX_RECIPES_SHOWN,
  MAX_TEST_AJAX_DELAY_SEC, MONGO_AUTO_INDEX, MONGO_CONNECT_TIMEOUT,
  NOP_TYPE_CZECH, ONLY_ONE_RECIPE_UNFURLED, REMOVE_RECORD_VERSION,
  SELF_COMMENTS_ALLOWED, SHORTEST_STRING_LEN, VALID_REDUCERS,
  commentIdToRecipeId, CookOnOwnPage, herokuEnvOrConfigFile, isNode,
  matchingRecipes, objectLength, rootAppRequire, safeEmail, safeReturns,
  safeStrip, testIdStrip, urlToRecipeId, userToUrl, vanillaPageContext,
};