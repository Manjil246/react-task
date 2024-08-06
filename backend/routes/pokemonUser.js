import express from "express"
const router = express.Router()
import PokemonUser from "../models/PokemonUser.js"

router.put("/adduser",async (req,res)=>{
    try{
        const {owner,name,ability,positionX,positionY,speed,direction} = req.body;
        await PokemonUser.create({
            owner,
            pokemons:[{ name,ability}],
            positionX,
            positionY,
            speed,
            direction
        });

        res.status(200).json({success:true,message:"User Added"})

    }catch(error){
        res.status(500).json({success:true,message:error.message})
    }
})

router.get("/fetchallusers",async (req,res)=>{
    try{
        const users = await PokemonUser.find();

        res.status(200).json({success:true,users})

    }catch(error){
        res.status(500).json({success:false,message:error.message})
    }
})

router.put("/addpokemon",async (req,res)=>{
    try {
        const {id,name,ability} = req.body;

        const user = await PokemonUser.findById(id);

        user.pokemons.push({name,ability})

        await user.save()

        res.status(200).json({success:true,message:"Pokemon Added"})

    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
})

router.delete("/deleteuser",async (req,res)=>{
    try {
        const {id} = req.body;

        await PokemonUser.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"User Deleted"})

    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
})

router.delete("/deleteallusers",async (req,res)=>{
    try {
        const {id} = req.body;

        await PokemonUser.deleteMany()
        res.status(200).json({success:true,message:"All Users Deleted"})

    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
})


export default router