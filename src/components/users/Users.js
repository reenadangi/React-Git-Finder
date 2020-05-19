import React,{useContext,useEffect} from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContex from '../../context/github/githubContext';

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}
const Users=()=> {
    const githubContext=useContext(GithubContex);
    useEffect(()=>{
        githubContext.getAllUsers("All");
    },[]);
   
    if(githubContext.loading){
        return <Spinner/>
    }   
    else{
        return (
            <div style={userStyle}>
                {githubContext.users.map(user=>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )

    } 
    
    
}

export default Users
