import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";

// const removecls=()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-success')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-warning')
// }

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=(cls)=>{
    // removecls();
    // document.body.classList.add('bg-'+cls)
    // console.log(cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert(": Dark mode is enabled","success")
      // document.title="Text Utility - Dark Mode"
      // setInterval(() => {
      //   document.title="Text Utility is amazing"
      // }, 1500);
      // setInterval(() => {
      //   document.title=" Install Text Utility"
      // }, 2000);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(": Light mode is enabled","success")
      // document.title="Text Utility - Light Mode"
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2000);
  }
  return (
    <>
    <Router>
    {/* <Navbar title="TextUtils" aboutText="About"/> */}
    <Navbar title="TextUtils" mode={mode} toggle={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* now in the new version of react-router-dom there is no switch it has been change or replaced */}
      <Routes>
          {/* this is the new syntax for routing  */}
          {/* exact for the exact rendering 
          /user --> component1
          /user/home -->component2 */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter to analyse your text below" mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>          
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
