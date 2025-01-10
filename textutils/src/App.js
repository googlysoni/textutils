

import './App.css';
import Alert from './component/Alert';
// import About from './component/About';
import Navbar from './component/Navbar';
import TestForm from './component/TestForm';
import React,{useState} from 'react'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [alret,setAlert]=useState('');
  const  showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type :type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
const [modi, setMode] = useState('light');
const togglemode=()=>
{
if(modi==='light')
{
  setMode('dark');
  document.body.style.backgroundColor='grey';
  showAlert("enabled dark mode","success");
  document.title="text util dark";
  // setInterval(() => {
  //   document.title="textutility is amazing";
  // }, 2000); 
  // setInterval(() => {
  //   document.title="install utility is amazing";
  // }, 1500);
}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("enabled light mode","success");
}
}
const [semode, setsemode] = useState('light');
const setogglemode=()=>
{
if(semode==='light')
{
  setsemode('dark');
  document.body.style.backgroundColor='green';
  showAlert("enabled dark mode","success");
}
else{
  setsemode('light');
  document.body.style.backgroundColor='white';
  showAlert("enabled light mode","success");
}
}
  return (
    <>
   {/* <Router> */}
    <Navbar title="TextUtils" aboutext=" aboutTo" mode={modi} togglemode={togglemode} semode={semode} setogglemode={setogglemode}/>
<Alert alert={alret}/>
<div className='container my-3'>
{/* <Routes> */}
  {/* /user    *----> component1
  /user/home    *----> component1 */}
            {/* <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={<TestForm title="Please enter text here" showAlert={showAlert} />}
            />
          </Routes> */}
        <TestForm title="please enter text here"  showAlert={showAlert}/>
{/* <About/> */}
</div>
{/* </Router> */}


    </>
  );
}

export default App;
