// import logo from './logo.svg';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// import './App.css';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const togglemode=()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode is enabled", "success");
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light mode is enabled", "success");
      }
  }

  return (
    <>
    <Router>
      <Navbar title="Text Util App" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert}/>
          </Route>
      </Switch>    
      </Router>
    </>
  );
}

export default App;
