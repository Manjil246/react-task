import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import AddUser from './Components/AddUser/AddUser'
import ListOfPokemonUser from './Components/ListOfPokemonUser/ListOfPokemonUser'
import 'react-toastify/dist/ReactToastify.css';
import AddPokemon from './Components/AddPokemon/AddPokemon'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div >
      <Router>
        <Navbar/>
        <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/adduser' element={<AddUser/>}/>
          <Route exact path='/listusers' element={<ListOfPokemonUser/>}/>
          <Route exact path='/addpokemon/:id/:name' element={<AddPokemon/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
