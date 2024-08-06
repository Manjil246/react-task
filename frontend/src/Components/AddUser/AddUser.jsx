import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Actions/PokemonUser.js";
import { ToastContainer, toast } from "react-toastify";
import { ClearError, ClearMessage } from "../../Reducers/PokemonUser.js";
import "./AddUser.css"

const AddUser = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonLink, setPokemonLink] = useState("");
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  const [ownerName, setOwnerName] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonAbilityName, setPokemonAbilityName] = useState("");
  const [positionX, setPositionX] = useState(1);
  const [positionY, setPositionY] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState("right");

  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.user);

  const changeHandlerName = (e) => {
    setPokemonLink(
      pokemons.filter((poke) => e.target.value === poke.name)[0].url
    );
    setPokemonName(e.target.value);
  };

  const changeHandlerPokemonAbility = (e) => {
    setPokemonAbilityName(e.target.value);
  };

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

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      addUser(
        ownerName,
        pokemonName,
        pokemonAbilityName,
        positionX,
        positionY,
        speed,
        direction
      )
    );
  };

  return (
    <div className="addUserDiv">
      <h1>Add Pokemon User</h1>
      <form onSubmit={submitHandler}>
        <div className="input1">
            <div>Pokemon User Name</div>
            <div>Pokemon Name</div>
            <div>Pokemon Ability</div>
            <div>Position X</div>
            <div>Pokemon Y</div>
            <div>Speed</div>
            <div>Direction</div>
        </div>
        <div className="input2">
                
                <input
                  type="text"
                  value={ownerName}
                  onChange={(e) => {
                    setOwnerName(e.target.value);
                  }}
                  required
                />
                
                <select onChange={changeHandlerName}>
                  {pokemons.length > 0 &&
                    pokemons.map((poke, index) => (
                      <option key={index} value={poke.name}>
                        {poke.name}
                      </option>
                    ))}
                </select>
                
                <select onChange={changeHandlerPokemonAbility}>
                  {pokemonAbilities.length > 0 &&
                    pokemonAbilities.map((name, index) => (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    ))}
                </select>
                
                <input
                  type="number"
                  value={positionX}
                  onChange={(e) => setPositionX(e.target.value)}
                  min="1"
                  max="20"
                  required
                />
                
                <input
                  type="number"
                  value={positionY}
                  onChange={(e) => setPositionY(e.target.value)}
                  min="1"
                  max="20"
                  required
                />
                
                <input
                  type="number"
                  value={speed}
                  onChange={(e) => {
                    setSpeed(e.target.value);
                  }}
                  min="1"
                  max="5"
                  required
                />
                
                <select
                  onChange={(e) => {
                    setDirection(e.target.value);
                  }}
                >
                  <option value="right">Right</option>
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="left">Left</option>
                </select>
                <input type="submit" value="Add USer" />
        </div>

        
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddUser;
