import React from 'react';
import './footer.css'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>Copyright &copy; {date}</p>
      </footer>
    </>
  );
};

export default Footer;
