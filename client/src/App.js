import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './componentes/Landing.jsx';
import DogsHome from './componentes/DogsHome';
import DogDetails from './componentes/DogCard';
import NewDog from './componentes/NewDog';
import {OnFilter} from './actions'




function App() {
  return (
    <BrowserRouter> 
   <div className="App">  
     <Route exact path='/' component={Landing}/>
     <Route path='/dogs' component={DogsHome}/>
     <Route path ='/dogs/:id' /*render ={({match}) => <DogDetails dog = {onFilter(match.params.id)}/>}/*//>
     <Route path = '/dogs/newDog' component={NewDog}/>
    </div>
    </BrowserRouter>
  );
}   

export default App;
