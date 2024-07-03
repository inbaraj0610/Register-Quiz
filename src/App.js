import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './Quiz';
import Register from './Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuccessRegister from './SuccessRegister';

function App() {
  return (
    <Router>
      <div className='bg'>
        <Routes>
          <Route path='/' element={
            <>
            <Link to='/register'>
            <button className='btn btn-success register'>Regiter Here</button>
            </Link>
            </>
          }/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/successregister' element={<SuccessRegister/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
