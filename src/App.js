
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './component/Details';
import Home from './component/Home';
import Navb from './component/Navb';
import UserList from './component/UserList';

function App() {
  const [listOfUSer , setlistOfUSer ] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setlistOfUSer(res.data))
        .catch(err=>console.log(err))
    }, [])
  return (
    <div className="App">
      <Navb/>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Users' element={<UserList listOfUSer={listOfUSer} />} />
        <Route path='/Users/Details/:id' element={<Details listOfUSer={listOfUSer} />} />
      </Routes>
    </div>
  );
}

export default App;
