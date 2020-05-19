// It will hold our actions
import React,{useReducer} from 'react';
import Axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReduser';
import{
    GET_ALL_USERS,
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

let githubClientId, githubClientSecret;
if(process.env.NODE_ENV!=='production')
{
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET

}
else{
    githubClientId = process.env.GITHUB_CLIENT_ID
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET

}




const GithubState=props=>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }
    const [state,dispatch]=useReducer(GithubReducer,initialState);
    // get all users when page loads
    const getAllUsers=async()=>{
        setLoading(true);
        const res= await Axios.get(`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);
        dispatch({
            type:GET_ALL_USERS,
            payload:res.data
        })
    }
    // search users
    const searchUsers=async text=>{
        setLoading(true);
        const res=await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);
        console.log(res.data.items)
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
    }

      // get single User info
    const getUser=async userName=>{
        console.log("In single user search"+userName)
        const res=await Axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);
        dispatch({
            type:GET_USER,
            payload:res.data
        })
   }
    // get repos
    const getUserRepos=async userName=>{
        console.log("In single user search"+userName)
        setLoading();
        const res=await Axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);
        console.log(res)
        dispatch({
            type:GET_REPOS,
            payload:res.data
        })
      }
    // clear users
    const clearUsers=()=>dispatch({type:CLEAR_USERS});
     
    // set loading
    const setLoading=()=>{
        dispatch({type:SET_LOADING})
    }
    return <GithubContext.Provider
    value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        getAllUsers,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos

    }}
    >
        {props.children}
    </GithubContext.Provider>
}
export default GithubState;