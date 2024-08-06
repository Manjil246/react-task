import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPokemon} from '../../Actions/PokemonUser'
import { useParams } from 'react-router-dom'
import {ToastContainer, toast} from "react-toastify"
import { ClearError, ClearMessage } from '../../Reducers/PokemonUser'
import "./AddPokemon.css"

const AddPokemon = () => {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonLink, setPokemonLink] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonAbilityName, setPokemonAbilityName] = useState("");
  
  const { message, error } = useSelector((state) => state.user);

    const dispatch = useDispatch()
    const {id,name} = useParams()

    useEffect(() => {
        const fetchPokemons = async () => {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
          );
          const data = await response.json();
          setPokemons(data.results);
          setPokemonLink(data.results[0].url);
          setPokemonName(data.results[0].name);
        };
        fetchPokemons();
      }, []);

      useEffect(() => {
        const fetchAbility = async () => {
          if (pokemonLink.length > 0) {
            const response = await fetch(pokemonLink);
            const data = await response.json();
            setPokemonAbilities(data.abilities.map((ab) => ab.ability.name));
            setPokemonAbilityName(data.abilities[0].ability.name);
          }
        };
        fetchAbility();
      }, [pokemonLink]);
      


      useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(ClearError());
        }
        if (message) {
          toast.success(message);
          dispatch(ClearMessage());
        }
      }, [dispatch, error, message]);

    const changeHandlerName = (e) => {
        setPokemonLink(
          pokemons.filter((poke) => e.target.value === poke.name)[0].url
        );
        setPokemonName(e.target.value);
      };
    
      const changeHandlerPokemonAbility = (e) => {
        setPokemonAbilityName(e.target.value);
      };

      const submitHandler = ()=>{
        dispatch(addPokemon(id,pokemonName,pokemonAbilityName))
      }
    
  return (
    <div className='addPokemonDiv'>
        User: <input type="text" value={name} disabled/>
        <br/>
        Pokemon Name: <select onChange={changeHandlerName}>
          {pokemons.length > 0 &&
            pokemons.map((poke, index) => (
              <option key={index} value={poke.name}>
                {poke.name}
              </option>
            ))}
        </select>
        <br />
        Pokemon Ability: <select onChange={changeHandlerPokemonAbility}>
          {pokemonAbilities.length > 0 &&
            pokemonAbilities.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
        </select>
        <br />
        <button onClick={submitHandler}>Add</button>
        <ToastContainer/>
    </div>
  )
}

export default AddPokemon
