import React, { useState } from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';


export default function App() {
  let pageSize=29;
  let apiKey=process.env.KEY; //use your API key
  const [progress,setProgress] =useState(0);

    return (
      <Router>
      <>
       <Navbar title="NewsExpress"/>
       <LoadingBar
        height={2}
        color='#f11946'
        progress={progress}
      />
       <Routes>
        <Route exact path="/" element={<News  setProgress={setProgress} key="general" pageSize= {pageSize} country="in" category="general"  apiKey={apiKey}/>}/>
        <Route exact path="/business" element={<News  setProgress={setProgress} key="business" pageSize= {pageSize} country="in" category="business"  apiKey={apiKey}/>}/>
        <Route exact path="/entertainment" element={<News  setProgress={setProgress} key="entertainment" pageSize= {pageSize} country="in" category="entertainment"  apiKey={apiKey}/>}/>
        <Route exact path="/general" element={<News  setProgress={setProgress} key="general" pageSize= {pageSize} country="in" category="general" apiKey={apiKey}/>}/>
        <Route exact path="/health" element={<News  setProgress={setProgress} key="health" pageSize= {pageSize} country="in" category="health"  apiKey={apiKey}/>}/>
        <Route exact path="/science" element={<News  setProgress={setProgress} key="science" pageSize= {pageSize} country="in" category="science"  apiKey={apiKey}/>}/>
        <Route exact path="/sports" element={<News  setProgress={setProgress} key="sports" pageSize= {pageSize} country="in" category="sports"  apiKey={apiKey}/>}/>
        <Route exact path="/technology" element={<News  setProgress={setProgress} key="technology" pageSize= {pageSize} country="in" category="technology"  apiKey={apiKey}/>}/>
       </Routes>
      </>
      </Router>
    )
};