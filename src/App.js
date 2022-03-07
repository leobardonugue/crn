import './App.css';
import React, { Suspense , lazy } from 'react';
import {BrowserRouter as Router , Routes , Route }from 'react-router-dom';
import { Link } from 'react-router-dom';

const List = lazy(() => import('./components/List'));
const Create = lazy(() => import('./components/Create'));
const Edit = lazy(() => import('./components/Edit'));


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to={"/create"}>Crear empleado</Link>
              <Link className="nav-item nav-link" to={"/edit"}>Editar empleado</Link>
          </div>
      </nav>
      <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<List/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </Suspense>
      </div>
    </Router>
  );
}

export default App;
