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

  function generateListItem(item, index) {
    return <Note key={index} title={item.title} content={item.content} />
  }

  return (
    <div>
      <Header />
      <CreateArea />
      {notesList.map(generateListItem)}
      <Footer />
    </div>
  );
}

export default App;