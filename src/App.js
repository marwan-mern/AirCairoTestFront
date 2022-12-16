import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LINE_TRANING_FORM from './components/LINE_TRANING_FORM.js';
import FLIGHT_DETAILS_FORM from './components/FLIGHT_DETAILS_FORM';
import Login from './components/Login';
import Manager_Main from './components/Manager_Main';
import Captin_Main from './components/Captin_Main';
import { ToastContainer } from 'react-toastify';
import READ_LINE_TRANING_FORM from './components/READ_LINE_TRANING_FORM';
import TABLE_LINE_TRANING_FORM from './components/TABLE_LINE_TRANING_FORM';
import READ_FLIGHT_DETAILS from './components/READ_FLIGHT_DETAILS';

 

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/Line" exact element={<LINE_TRANING_FORM/>} />
          <Route path="/ReadLine/:id" exact element={<READ_LINE_TRANING_FORM/>} />
          <Route path="/ReadDetails/:id" exact element={<READ_FLIGHT_DETAILS/>} />
          <Route path="/Table/:Location" exact element={<TABLE_LINE_TRANING_FORM/>} />
          <Route path="/Details" exact element={<FLIGHT_DETAILS_FORM/>} />
          <Route path="/Manager" exact element={<Manager_Main/>} />
          <Route path="/Captin" exact element={<Captin_Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );



}

export default App;
