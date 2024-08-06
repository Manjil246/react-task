import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllUsers, deleteUser, fetchAllUsers } from '../../Actions/PokemonUser'
import "./ListOfPokemonUser.css"
import {Link} from "react-router-dom"
import { ToastContainer,toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faAdd } from '@fortawesome/free-solid-svg-icons'
import { ClearError, ClearMessage } from '../../Reducers/PokemonUser'


const ListOfPokemonUser = () => {

    const dispatch = useDispatch()
    const {users,error,message,loading} = useSelector(state=>state.user)

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])

    const deleteHandler= async (id)=>{
      await dispatch(deleteUser(id));
      await dispatch(fetchAllUsers());
    }
    
    const deleteAllHandler = async ()=>{
      await dispatch(deleteAllUsers())
      await dispatch(fetchAllUsers());
    }


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
    

  return (
    <div className='listDiv'>
      <h1>List of Pokemon Users</h1>
      <button onClick={deleteAllHandler}>Delete All</button>
      <table>
        <thead>
        <tr>
            <th>PokemonOwnerName</th>
            <th>Pokemon Name</th>
            <th>PokemonAbility</th>
            <th>No.of pokemon</th>
            <th>Add pokemon</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
    { 
        users && users.length>0 && users.map((user)=>
        <tr key={user._id}>
            <td>{user.owner}</td>
            <td>{user.pokemons[0].name}</td>
            <td>{user.pokemons[0].ability}</td>
            <td>{user.pokemons.length}</td>
            <td><Link to={`/addpokemon/${user._id}/${user.owner}`}><FontAwesomeIcon className='fa' icon={faAdd}/></Link></td>
            <td><button onClick={()=>deleteHandler(user._id)} disabled={loading}><FontAwesomeIcon className='fa' icon={faTrash}/></button></td>
        </tr>
        )
    }

</tbody>
      </table>
      <ToastContainer/>
    </div>
  )
}

export default ListOfPokemonUser
