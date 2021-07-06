import React, { useEffect, useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import UploadForm from './comps/UploadForm';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./comps/theme/GlobalStyles";
import Toggler from './comps/theme/Toggler';
import ScrollTopIcon from './comps/ScrollTopIcon';

const StyledApp = styled.div``;

function App() {

  const [ selectedImg, setSelectedImg ] = useState(null);
  const [theme, setTheme] = useState("light");
  
  useEffect(()=>{
    const data = localStorage.getItem('data')
    
    if(data){
      setTheme(JSON.parse(data))
     }
    },[])
    
    useEffect(()=>{
      localStorage.setItem('data',JSON.stringify(theme))
    })
 
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    
    <StyledApp className="App">

    <div className="title">
      <Toggler theme={theme} setTheme={setTheme} />
      <h1>Gallery</h1>
      <p>Find what people are sharing</p>
    </div>
      <UploadForm />
      <ScrollTopIcon />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </StyledApp>
    </ThemeProvider>
    
  );
}

export default App;