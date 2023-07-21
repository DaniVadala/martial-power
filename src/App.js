import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        {/* <Route path='*' element={<h1>Page not found: 404</h1>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
