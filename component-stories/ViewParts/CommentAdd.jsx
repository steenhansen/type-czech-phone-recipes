import React, { useState } from "react";
import { ButtonBase } from "../ButtonBase";
import { useServerContext } from "../../server-app/serverBrowserContext";
import { SHORTEST_STRING_LEN } from "../../import-2-require/common-2-import";
import { useDispatch } from "react-redux";
import { databasePost } from "../../redux-store/ajax-calls.js";

export { CommentAdd };

function CommentAdd({ _id, used_comments, title }) {
  const dispatch = useDispatch();
  const recipe_id = _id;
  const server_variables = useServerContext();
  const { shared_auth_email, shared_csrfToken } = server_variables;
  const [remark, setRemarkText] = useState("");
  const commentChange = (event) => setRemarkText(event.target.value);
  const onCommentClick = async (event) => {
    if (remark.length > 0) {
      const comment_data = { recipe_id, by: shared_auth_email, remark, title };
      const comment_add = await databasePost("add-comment", shared_csrfToken, comment_data);
      if (comment_add instanceof Error) {
        dispatch({ type: "ajax-error", payload: comment_add });
      } else {
        dispatch({ type: "add-comment", payload: comment_data });
      }
      setRemarkText("");
    }
  };

  let is_disabled = true;
  const trimmed_remark = remark.trim();
  if (shared_auth_email === "") {
    return (
      <ButtonBase className="float-left mt-2 mr-2 ">
        <a href="/login/federated/google">Sign In to Comment</a>
      </ButtonBase>
    );
  } else if (trimmed_remark.length > SHORTEST_STRING_LEN) {
    if (used_comments.indexOf(trimmed_remark)) {
      is_disabled = false;
    }
  }

  return (
    <div className="mt-2 ">
      <ButtonBase className="pl-1 pr-1 ml-2 mr-2 base-button" is_disabled={is_disabled}>
        <a id="--new--comment--add--" onClick={onCommentClick}>
          Add Comment
        </a>
      </ButtonBase>
      <input
        id="--new--comment--text--"
        onChange={commentChange}
        className="w-7/12 base-edit"
        type="text"
        value={remark}
        placeholder="New recipe comment ..."
      />
    </div>
  );
}
