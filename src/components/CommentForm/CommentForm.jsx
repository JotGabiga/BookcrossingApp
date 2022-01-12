import React, { useState } from "react";
import "./CommentForm.scss";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const CommentForm = ({ handleSubmit, submitLabel }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, checked);
    setText("");
    setChecked(false);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-multiline-flexible"
          label="Dodaj komentarz"
          multiline
          maxRows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
          }}
        />
        <section className="checkboxSec">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                name="checked"
              />
            }
            label="Uwaga Spoiler! Ten temat może zawierać treści zdradzające fabułę."
          />
          <section className="buttonSec">
            <button type="reset" onClick={() => setText(() => "")}>
              Usuń
            </button>
            <button disabled={isTextareaDisabled}>{submitLabel}</button>
          </section>
        </section>
      </form>
    </div>
  );
};
export default CommentForm;
