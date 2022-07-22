import React, { useState } from 'react';
import './createArea.css';

const CreateArea = props => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = e => {
    props.onAdd(note);
    setNote({ title: '', content: '' });
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name='title'
          placeholder='Title'
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          cols='30'
          rows='3'
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
