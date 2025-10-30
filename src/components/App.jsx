import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const[notes, setNote] = useState([]);
  
  function addNote(note){
    setNote(prevNote => {
      return [...prevNote, note]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
      />
      {notes.map(noteItem => {
        return <Note 
        title={noteItem.title}
        content={noteItem.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
