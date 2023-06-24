import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const sampleNotesList = [
    {
      title: "Note 1",
      content: "This is content"
    },
    {
      title: "Note 2",
      content: "This is content, too"
    },
  ];
  const [notesList, setNotesList] = useState(sampleNotesList);

  function addNoteToList(newNote) {
    setNotesList(prevValue => {
      return [...prevValue, newNote];
    });
  }

  function deleteNoteFromList(noteID) {
    setNotesList(prevValue => {
      return prevValue.filter(
        (item, itemIndex) => {
          return (noteID != itemIndex);
        }
      );
    })
  }

  function generateListItem(item, index) {
    return (
      <Note 
        key={index}
        id={index}
        title={item.title}
        content={item.content}
        deleteNoteFromList={deleteNoteFromList}
      />
    )
  }

  return (
    <div>
      <Header />
      <CreateArea addNoteToList={addNoteToList}/>
      {notesList.map(generateListItem)}
      <Footer />
    </div>
  );
}

export default App;