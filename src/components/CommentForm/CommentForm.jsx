import React, { useState } from "react";
import "./CommentForm.scss";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

const CommentForm = ({ handleSubmit, submitLabel }) => {
  // const [data, setData] = useState("");
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  console.log(checked);
  // const { id } = useParams();
  // const book = props.book;
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text, checked);
    setText("");
    setChecked(false);
  };



  // const sendComment = (dataFromInput) => {
  //   setData(dataFromInput);
  //   console.log(data);
  //   const comment = {
  //     userId: "615f304d7067ad94bd94a0ce",
  //     text: data,
  //     fullName: "Jane Doe",
  //   };
  // axios
  //   .post(`http://localhost:5000/books/${id}/comments`, {
  //     comments: comment,
  //   })
  //   .then((res) => {
  //     book.comments.push(comment);

  //   });





  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* noValidate autoComplete="off"> */}
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
            control={<Checkbox
              checked={checked}
              // onChange={console.log("Checked?")}
              onChange={e => setChecked(e.target.checked)}
              name="checked" />}
            label="Uwaga Spoiler! Ten temat może zawierać treści zdradzające fabułę."
          />
          <button>Usuń</button>
          <button disabled={isTextareaDisabled}>{submitLabel}</button>
          {/* <Button
            primary
            // onChange={() => sendComment(data)}
            classes={{ root: "basicButton", label: "basicButton-label" }}
            variant="contained"
          >
            {submitLabel}
          </Button> */}
        </section>
      </form>
    </div>
  );
};
export default CommentForm;
