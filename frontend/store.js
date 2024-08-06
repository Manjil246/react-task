import { configureStore } from "@reduxjs/toolkit";
import pokemonUserReducer from "./src/Reducers/PokemonUser"

const store = configureStore({
    reducer:{
        "user":pokemonUserReducer
    }
})

export default store