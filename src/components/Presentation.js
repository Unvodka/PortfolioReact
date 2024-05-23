import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context';
import './Presentation.css';

const Presentation = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        className="presentation"
        style={{
          background: darkMode
            ? 'linear-gradient(100deg, #222 0%, wheat 50%, #222 100%)'
            : '',
          color: darkMode ? 'wheat' : '#222',
          borderBottom: darkMode ? '1px solid wheat' : '1px solid #222',
        }}
      >
        <div className="presentation-title">
          <p className="hello" style={{ color: darkMode ? '#222' : 'wheat' }}>
            Hello, my name is
          </p>
          <h1 className="name" style={{ color: darkMode ? '#222' : 'wheat' }}>
            Arnaud
          </h1>
        </div>
        <div className="title" style={{ color: darkMode ? '#222' : 'wheat' }}>
          <div className="title-wrapper">
            <div className="title-item">Web Developer</div>
            <div className="title-item">Software Engineer</div>
            <div className="title-item">UI-UX Designer</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;
