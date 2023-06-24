import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function onTextChange(event) {
    const {name, value} = event.target;

    setNote(prevValue => {
      return {...prevValue, [name]: value};
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={onTextChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={onTextChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={
            (event) => {
              props.addNoteToList(note);
              setNote({
                title: "",
                content: ""
              });
              event.preventDefault();
            }
          }
        >
        Add</button>
      </form>
    </div>
  );
}

export default CreateArea;