import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import notes from '../Notes';

const App = () => {
  return (
    <>
      <Header />
      {notes.map(item => {
        return (
          <Note key={item.key} title={item.title} content={item.content} />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
