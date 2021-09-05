import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './componentes/Landing.jsx';
import DogsHome from './componentes/DogsHome';
import NewDog from './componentes/NewDog';
import DogsDetails from './componentes/DogsDetails';




function App() {
  return (
    <BrowserRouter> 
   <div className="App">  
     <Route exact path='/' component={Landing}/>
     <Route exact path='/dogs' component={DogsHome}/>
     <Route path ='/dogs/:id'  render ={({match}) => <DogsDetails id = {match.params.id}/>}/>
     <Route path ='/newDog' component={NewDog}/>
    </div>
    </BrowserRouter>
  );
}   

export default App;
