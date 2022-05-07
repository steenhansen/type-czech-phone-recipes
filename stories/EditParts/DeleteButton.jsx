import { ButtonBase } from '../ButtonBase'

export { DeleteButton }

function DeleteButton({ delete_visible, deleteJsxRecipe }) {
  if (delete_visible) {
    return (
      <ButtonBase className="" style={{ visibility: delete_visible }}>
        <a id="_delete-recipe_" className="delete-hover-red" onClick={_ => deleteJsxRecipe()}>Delete Recipe</a>
      </ButtonBase>
    )
  }
  return '';
}




