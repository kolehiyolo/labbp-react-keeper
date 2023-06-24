import React, {useState} from "react";

function CreateArea() {
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
        />
        <textarea
          onChange={onTextChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;