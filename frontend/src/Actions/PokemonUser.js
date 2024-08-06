import axios from "axios"
import { 
    GetUserRequest,
    GetUserSuccess,
    GetUserFailure,
    AddUserRequest,
    AddUserSuccess,
    AddUserFailure,
    AddPokemonRequest,
    AddPokemonSuccess,
    AddPokemonFailure,
    DeleteUserRequest,
    DeleteUserSuccess,
    DeleteUserFailure,
    DeleteAllUsersRequest,
    DeleteAllUsersSuccess,
    DeleteAllUsersFailure,
 } from "../Reducers/PokemonUser";

 export const addUser = (owner,name,ability,positionX,positionY,speed,direction)=>async (dispatch)=>{
    try {
        dispatch(AddUserRequest());

        const {data} = await axios.put(
            "http://localhost:4000/pokemon/adduser",
            {owner,name,ability,positionX,positionY,speed,direction},
            {
                headers:{
                    "Content-Type":"application/json",
                }
            },
        )

        dispatch(AddUserSuccess(data.message))
        

    } catch (error) {
        dispatch(AddUserFailure(error.response.data.message))
    }
}

export const fetchAllUsers = ()=>async (dispatch)=>{
    try {
        dispatch(GetUserRequest())
        const {data} = await axios.get("http://localhost:4000/pokemon/fetchallusers");

        dispatch(GetUserSuccess(data.users))

    } catch (error) {
        dispatch(GetUserFailure(error.response.data.messsage))
    }
}

export const addPokemon = (id,name,ability)=>async (dispatch)=>{
    try {
        dispatch(AddPokemonRequest())

        const {data} = await axios.put("http://localhost:4000/pokemon/addpokemon",
            {id,name,ability},
            {
                    headers:{
                        "Content-Type":"application/json"
                }
            }
        )
        dispatch(AddPokemonSuccess(data.message))

    } catch (error) {
        dispatch(AddUserFailure(error.response.data.message))
    }
}

export const deleteUser = (id)=>async (dispatch)=>{
    try {
        dispatch(DeleteUserRequest())

        const {data} = await axios.delete("http://localhost:4000/pokemon/deleteuser",
            {data:{id}},
            {
                headers:{
                    "Content-Type":"application/json"
                }
            }
        )

        dispatch(DeleteUserSuccess(data.message))

    } catch (error) {
        dispatch(DeleteUserFailure(error.response.data.message))
    }
}

export const deleteAllUsers = ()=>async (dispatch)=>{
    try {
        dispatch(DeleteAllUsersRequest())

        const {data} = await axios.delete("http://localhost:4000/pokemon/deleteallusers")

        dispatch(DeleteAllUsersSuccess(data.message))

    } catch (error) {
        dispatch(DeleteAllUsersFailure(error.response.data.message))
    }
}