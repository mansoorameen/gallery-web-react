import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
// import Title from './comps/Title'; 
import UploadForm from './comps/UploadForm';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div``;

function App() {

  const [ selectedImg, setSelectedImg ] = useState(null);
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    
    <StyledApp className="App">

    <div className="title">
      <div>
      <h1>Online Gallery</h1> </div>
      <div className="switch">
      <input className="toggle" type="checkbox" onClick={() => themeToggler()} />
      </div>

      <h2>Pictures</h2>
      <p>Find what people are sharing</p>
    </div>
      {/* <Title/> */}
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </StyledApp>
    </ThemeProvider>
    
  );
}

export default App;