import mongoose from "mongoose";

const pokemonUserSchema = new mongoose.Schema({
    owner:String,
    pokemons:[{
        name:String,
        ability:String,
    }],
    positionX:Number,
    positionY:Number,
    speed:Number,
    direction:String
})

export default mongoose.model("PokemonUser",pokemonUserSchema)