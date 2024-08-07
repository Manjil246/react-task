import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../../Actions/PokemonUser'
import "./Home.css"
import Loading from '../Loading/Loading'
import { ToastContainer,toast } from 'react-toastify'

const Home = () => {

  const {users,loading} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const [pokemonOwner, setPokemonOwner] = useState({})
  const [motion,setMotion] = useState(false)
  const [style,setStyle] = useState({left:0,top:270})
  const [display, setDisplay] = useState('block')

  useEffect(() => {
      const init = async ()=>{
        await dispatch(fetchAllUsers())
      }
      init();
  }, [dispatch])

  useEffect(() => {
    if(users && users.length>0){
        const firstUser=users[0]
        setPokemonOwner(firstUser)
        setStyle({left:firstUser.positionX*25-10,top:300-firstUser.positionY*15-10})
        setDisplay("block")
        setMotion(false)
    }
  }, [users])

  const changeOwnerHandler = async (e)=>{
    const userSelected = users.filter((user)=>user._id===e.target.value)[0]
    if(users.length>0){
      setPokemonOwner(userSelected)
      setStyle({left:userSelected.positionX*25-10,top:300-userSelected.positionY*15-20})
      setDisplay("block")
      setMotion(false)
    }
  }

  const styleRef = useRef(style)

  useEffect(() => {
    styleRef.current = style
  }, [style])

  useEffect(() => {
    const interval = setInterval(() => {
      if (motion) {
        const currentStyle = styleRef.current

        if (currentStyle.left < 0 || currentStyle.left > 500 || currentStyle.top < 0 || currentStyle.top > 300) {
          setDisplay("none")
        } else {
          if(pokemonOwner.direction==="right"){
            setStyle(previousStyle => ({
              ...previousStyle,
              left: previousStyle.left + pokemonOwner.speed*10
            }))
          }
          if(pokemonOwner.direction==="left"){
            setStyle(previousStyle => ({
              ...previousStyle,
              left: previousStyle.right - pokemonOwner.speed*10
            }))
          }
          if(pokemonOwner.direction==="top"){
            setStyle(previousStyle => ({
              ...previousStyle,
              top: previousStyle.top - pokemonOwner.speed*10
            }))
          }
          if(pokemonOwner.direction==="bottom"){
            setStyle(previousStyle => ({
              ...previousStyle,
              top: previousStyle.top + pokemonOwner.speed*10
            }))
          }
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [motion])

  const fleeHandler = () => {
    setDisplay(display === 'block' ? 'none' : 'block')
    setMotion(false)
  }
  

  return (
    <div className='center'>
    {loading?<Loading/>:
    <div className='homeDiv'>
      <h1>List of Pokemon Owner</h1>
      <select onChange={changeOwnerHandler}>
        {!(users && users.length>0)?<option value="">No Users yet</option> : users.map((user)=>(
          <option key={user._id} value={user._id}>{user.owner}</option>
        ))}
      </select>

      <table>
      <thead>
        <tr>
          <th>Pokemon</th>
          <th>Ability</th>
        </tr>
      </thead>
        <tbody>
        {pokemonOwner.pokemons && pokemonOwner.pokemons.map((pokemon,index)=>(
          <tr key={index}>
            <td>{pokemon.name}</td>
            <td>{pokemon.ability}</td>
          </tr>
        ))}
        </tbody>
      </table>

      <button onClick={()=>{setMotion(true)}}>Pokemon Go</button>
      <button onClick={fleeHandler}>Pokemon Flee</button>
      <button onClick={()=>{setMotion(false)}}>Pokemon Cease</button>

      <div className='pokemonContainer'>
        {pokemonOwner.pokemons && pokemonOwner.pokemons.map((pokemon,index)=>(
          <div key={index} 
          style={{position:"relative",top:`${style.top}px`,left:`${style.left}px`,display:`${display}`}} 
          className='pokemon'>{pokemon.name}</div>
        ))}
      </div>
    </div>}
    <ToastContainer/>
    </div>
  )
}

export default Home
