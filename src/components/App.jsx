import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import notes from '../notes.js';

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteData) => 
        <Note 
          key={noteData.key}
          id={noteData.key}
          title={noteData.title}
          content={noteData.content}
        />
      )};
      <Footer />
    </div>
  );
}

export default App;