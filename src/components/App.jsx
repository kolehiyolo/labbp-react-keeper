import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import notes from '../notes.js';

function App() {
  return (
    <div>
      <Header />
      {notes.map((notesData) => 
        (
          <Note 
            key={notesData.key}
            id={notesData.key}
            title={notesData.title}
            content={notesData.content}
          />
        )
      )};
      <Footer />
    </div>
  );
}

export default App;